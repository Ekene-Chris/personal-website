// Public details for the current webinar. Update these for the next session.
// The WEBINAR tag sent to Brevo comes from the WEBINAR_ID env var instead, so
// it can change without a code edit.
export const webinar = {
  title: "Become the Engineer Global Teams Chase",
  calendarTitle: "Teleios Live Session: Become the Engineer Global Teams Chase",
  // 6:00 PM WAT (UTC+1, no daylight saving) on Saturday 17 October 2026.
  startsAt: "2026-10-17T17:00:00Z",
  durationMinutes: 60,
  hostTimeZone: "Africa/Lagos",
  hostTimeZoneLabel: "WAT",
  platform: "Google Meet",
  // Joining link, from the WEBINAR_MEET_URL env var. When set, it's shown on
  // the thank-you page and added to the calendar invites; otherwise those
  // point people to the confirmation email. Read at build time, so redeploy
  // after changing it.
  meetUrl: /^https:\/\/\S+$/.test(process.env.WEBINAR_MEET_URL ?? "")
    ? process.env.WEBINAR_MEET_URL
    : null,

  // Optional links. Leave as null to hide them.
  whatsappCommunityUrl: null,
  beginnerProgramsUrl: null,
};

// Link preview image, rendered by app/webinar/og-image.png/route.jsx.
export const socialImage = {
  url: "/webinar/og-image.png",
  width: 1200,
  height: 630,
  alt: "Stop Chasing Remote Jobs. Become the Engineer Global Teams Chase. A free live webinar with Ekene Chris.",
};

export const host = {
  name: "Ekene Chris",
  photo: "/images/webinar/host.jpg",
  avatar: "/images/webinar/host-avatar.jpg",
  linkedin: "https://www.linkedin.com/in/ekene-chris",
};
