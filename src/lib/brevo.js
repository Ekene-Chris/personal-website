// Server-only helpers for Brevo. The API key must never reach the browser.

const BREVO_CONTACTS_URL = "https://api.brevo.com/v3/contacts";

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
