import { NextResponse } from "next/server";
import {
  createBrevoContact as createContact,
  sendBrevoTemplateEmail,
} from "@/lib/brevo";
import { createRateLimiter, getClientIp } from "@/lib/rate-limit";
import { validateRegistration } from "@/lib/webinar/registration";

const SOURCE = "webinar-landing-page";
const MAX_BODY_BYTES = 10_000;
const GENERIC_ERROR =
  "We couldn’t save your seat just now. Please try again in a moment.";

const isRateLimited = createRateLimiter({ windowMs: 60_000, max: 5 });

const pickUtm = (value) =>
  typeof value === "string" ? value.trim().slice(0, 100) : "";

export async function POST(request) {
  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      { error: "Too many attempts. Please wait a minute and try again." },
      { status: 429 }
    );
  }

  if (Number(request.headers.get("content-length")) > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Request too large." }, { status: 413 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    body = null;
  }
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: the field is hidden from people, so only bots fill it in.
  // Report success so they don’t retry with a different payload.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const { values, errors, isValid } = validateRegistration(body);
  if (!isValid) {
    return NextResponse.json(
      { error: "Please fix the highlighted fields.", fieldErrors: errors },
      { status: 400 }
    );
  }

  const { BREVO_API_KEY, BREVO_LIST_ID, WEBINAR_ID } = process.env;
  const listId = Number(BREVO_LIST_ID);
  if (!BREVO_API_KEY || !Number.isInteger(listId) || !WEBINAR_ID) {
    console.error(
      "[register] BREVO_API_KEY, BREVO_LIST_ID and WEBINAR_ID must all be set"
    );
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
  }

  const optional = {
    BLOCKER: values.blocker,
    UTM_SOURCE: pickUtm(body.utm?.source),
    UTM_MEDIUM: pickUtm(body.utm?.medium),
    UTM_CAMPAIGN: pickUtm(body.utm?.campaign),
  };
  const attributes = {
    FIRSTNAME: values.firstName,
    LASTNAME: values.lastName,
    WHATSAPP: values.whatsapp,
    ROLE: values.role,
    YEARS_EXPERIENCE: values.years,
    PRIMARY_AREA: values.area,
    WEBINAR: WEBINAR_ID,
    SOURCE,
    // Omit blanks so a re-registration doesn’t wipe values captured earlier.
    ...Object.fromEntries(Object.entries(optional).filter(([, v]) => v)),
  };
  const payload = {
    email: values.email,
    attributes,
    listIds: [listId],
    updateEnabled: true,
  };

  try {
    let response = await createContact(BREVO_API_KEY, payload);

    // Brevo keeps WhatsApp numbers unique across contacts. If someone registers
    // a second email with the same number, still add them to the list rather
    // than failing the registration.
    if (response.status === 400) {
      const error = await response.clone().json().catch(() => ({}));
      if (error.code === "duplicate_parameter") {
        console.warn(
          "[register] WhatsApp number already on another contact; saving without it"
        );
        const withoutWhatsapp = { ...attributes };
        delete withoutWhatsapp.WHATSAPP;
        response = await createContact(BREVO_API_KEY, {
          ...payload,
          attributes: withoutWhatsapp,
        });
      }
    }

    if (!response.ok) {
      console.error(
        "[register] Brevo rejected the contact",
        response.status,
        await response.text()
      );
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 });
    }
  } catch (error) {
    console.error("[register] Could not reach Brevo", error);
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 });
  }

  await sendConfirmationEmail(BREVO_API_KEY, values);

  return NextResponse.json({ ok: true });
}

// Sends the confirmation email (Brevo template BREVO_TEMPLATE_ID) once the
// contact is saved. A failure here is logged rather than returned: the seat
// is already saved and the thank-you page shows the joining link, so telling
// the visitor registration failed would be wrong.
async function sendConfirmationEmail(apiKey, { email, firstName }) {
  const templateId = Number(process.env.BREVO_TEMPLATE_ID);
  if (!Number.isInteger(templateId) || templateId < 1) {
    console.error(
      "[register] BREVO_TEMPLATE_ID is not set; no confirmation email sent"
    );
    return;
  }

  try {
    const response = await sendBrevoTemplateEmail(apiKey, {
      templateId,
      to: [{ email, name: firstName }],
    });
    if (!response.ok) {
      console.error(
        "[register] Brevo didn't send the confirmation email",
        response.status,
        await response.text()
      );
    }
  } catch (error) {
    console.error("[register] Could not reach Brevo to send the email", error);
  }
}
