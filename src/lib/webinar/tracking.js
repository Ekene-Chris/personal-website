// Browser-only helpers shared by the registration form and thank-you page.

// Set on successful registration so the thank-you page only reports a
// conversion for real sign-ups, not refreshes or direct visits.
export const REGISTERED_FLAG = "webinar:registered";

const UTM_STORAGE_KEY = "webinar:utm";
const UTM_FIELDS = ["source", "medium", "campaign"];

// Returns { source, medium, campaign } from the URL, falling back to whatever
// was captured earlier in the session if the visitor lost the query string.
export function readUtmParams() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = Object.fromEntries(
    UTM_FIELDS.filter((field) => params.get(`utm_${field}`)).map((field) => [
      field,
      params.get(`utm_${field}`),
    ])
  );

  try {
    if (Object.keys(fromUrl).length > 0) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(fromUrl));
      return fromUrl;
    }
    return JSON.parse(sessionStorage.getItem(UTM_STORAGE_KEY)) ?? {};
  } catch {
    return fromUrl;
  }
}
