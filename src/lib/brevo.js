// Server-only helpers for Brevo. The API key must never reach the browser.

const BREVO_CONTACTS_URL = "https://api.brevo.com/v3/contacts";
const BREVO_EMAIL_URL = "https://api.brevo.com/v3/smtp/email";

// Creates a contact, or updates it when the email already exists if the
// payload sets updateEnabled. Adding a contact to a list is what triggers
// that list's Brevo automations.
export function createBrevoContact(apiKey, payload) {
  return fetch(BREVO_CONTACTS_URL, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
    signal: AbortSignal.timeout(10_000),
  });
}

// Sends a transactional email using a template designed in Brevo. The
// template's sender, subject and content all come from Brevo.
export function sendBrevoTemplateEmail(apiKey, { templateId, to }) {
  return fetch(BREVO_EMAIL_URL, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ templateId, to }),
    cache: "no-store",
    signal: AbortSignal.timeout(10_000),
  });
}
