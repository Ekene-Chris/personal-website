import { COUNTRIES } from "./countries";

// Shared by the registration form and /api/register so client and server
// validation can't drift apart.

export const DEFAULT_COUNTRY = "NG";
export const BLOCKER_MAX_LENGTH = 500;

export const YEARS_OF_EXPERIENCE = [
  { value: "0-1", label: "0–1 years" },
  { value: "1-3", label: "1–3 years" },
  { value: "3-5", label: "3–5 years" },
  { value: "5+", label: "5+ years" },
];

export const PRIMARY_AREAS = [
  { value: "DevOps/Cloud", label: "DevOps / Cloud" },
  { value: "Full-Stack", label: "Full-Stack" },
  { value: "Other", label: "Other" },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const E164_PATTERN = /^\+[1-9]\d{7,14}$/;

// Turns what the visitor typed (plus the selected country) into E.164, or
// returns null if it can't be a valid number. A full international number
// ("+44…" or "0044…") overrides the country selector. The local trunk "0"
// (0803… in Nigeria) is dropped in both cases, so "+234 0803…" works too.
export function toE164(countryCode, phone) {
  const raw = String(phone ?? "").trim();
  if (!/^[+\d\s().-]+$/.test(raw)) return null;

  let digits = raw.replace(/\D/g, "");
  let country;
  if (/^(\+|00)/.test(raw)) {
    digits = digits.replace(/^00/, "");
    country = COUNTRIES.filter((c) => digits.startsWith(c.dial)).sort(
      (a, b) => b.dial.length - a.dial.length
    )[0];
    if (!country) return null;
    digits = digits.slice(country.dial.length);
  } else {
    country = COUNTRIES.find((c) => c.code === countryCode);
    if (!country) return null;
  }

  const national = digits.replace(/^0+/, "");
  const lengthOk = country.digits
    ? national.length === country.digits
    : national.length >= 6;
  const e164 = `+${country.dial}${national}`;
  return lengthOk && E164_PATTERN.test(e164) ? e164 : null;
}

const clean = (value) => (typeof value === "string" ? value.trim() : "");

export function validateRegistration(input = {}) {
  const values = {
    firstName: clean(input.firstName),
    lastName: clean(input.lastName),
    email: clean(input.email).toLowerCase(),
    country: clean(input.country) || DEFAULT_COUNTRY,
    phone: clean(input.phone),
    role: clean(input.role),
    years: clean(input.years),
    area: clean(input.area),
    blocker: clean(input.blocker),
    consent: input.consent === true,
  };
  const whatsapp = toE164(values.country, values.phone);
  const errors = {};

  if (!values.firstName) errors.firstName = "Enter your first name.";
  else if (values.firstName.length > 50)
    errors.firstName = "First name must be 50 characters or fewer.";

  if (!values.lastName) errors.lastName = "Enter your last name.";
  else if (values.lastName.length > 50)
    errors.lastName = "Last name must be 50 characters or fewer.";

  if (!values.email) errors.email = "Enter your email address.";
  else if (values.email.length > 254 || !EMAIL_PATTERN.test(values.email))
    errors.email = "Enter a valid email address, like name@example.com.";

  if (!values.phone) errors.phone = "Enter your WhatsApp number.";
  else if (!whatsapp)
    errors.phone = "Enter a valid WhatsApp number for the selected country.";

  if (!values.role) errors.role = "Enter your current role.";
  else if (values.role.length > 100)
    errors.role = "Current role must be 100 characters or fewer.";

  if (!YEARS_OF_EXPERIENCE.some((option) => option.value === values.years))
    errors.years = "Select your years of experience.";

  if (!PRIMARY_AREAS.some((option) => option.value === values.area))
    errors.area = "Select your primary area.";

  if (values.blocker.length > BLOCKER_MAX_LENGTH)
    errors.blocker = `Keep this to ${BLOCKER_MAX_LENGTH} characters or fewer.`;

  if (!values.consent)
    errors.consent = "Please agree so we can send you the session details.";

  return {
    values: { ...values, whatsapp },
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}
