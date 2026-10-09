const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Shared by the webinar registration and newsletter forms, on both the client
// and the server.
export const normalizeEmail = (value) =>
  typeof value === "string" ? value.trim().toLowerCase() : "";

export const isValidEmail = (email) =>
  email.length <= 254 && EMAIL_PATTERN.test(email);
