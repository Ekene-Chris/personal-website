import { NextResponse } from "next/server";
import { createBrevoContact } from "@/lib/brevo";
import { isValidEmail, normalizeEmail } from "@/lib/email";
import { createRateLimiter, getClientIp } from "@/lib/rate-limit";

const MAX_BODY_BYTES = 2_000;
const GENERIC_ERROR =
  "We couldn’t subscribe you just now. Please try again in a moment.";

const isRateLimited = createRateLimiter({ windowMs: 60_000, max: 5 });

// Adds the email to the newsletter list in Brevo. It uses its own list
// (BREVO_NEWSLETTER_LIST_ID) so subscribers don't trigger the webinar
// automation, and sets no attributes so an existing contact's details (such
// as a webinar registrant's SOURCE) are left untouched.
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

  // Honeypot: hidden from people, so only bots fill it in.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const email = normalizeEmail(body.email);
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address, like name@example.com." },
      { status: 400 }
    );
  }

  const { BREVO_API_KEY, BREVO_NEWSLETTER_LIST_ID } = process.env;
  const listId = Number(BREVO_NEWSLETTER_LIST_ID);
  if (!BREVO_API_KEY || !Number.isInteger(listId)) {
    console.error(
      "[newsletter] BREVO_API_KEY and BREVO_NEWSLETTER_LIST_ID must both be set"
    );
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
  }

  try {
    const response = await createBrevoContact(BREVO_API_KEY, {
      email,
      listIds: [listId],
      updateEnabled: true,
    });
    if (!response.ok) {
      console.error(
        "[newsletter] Brevo rejected the contact",
        response.status,
        await response.text()
      );
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 });
    }
  } catch (error) {
    console.error("[newsletter] Could not reach Brevo", error);
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
