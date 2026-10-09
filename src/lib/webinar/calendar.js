import { host, webinar } from "./config";

const description = [
  `Free live session with ${host.name} (Teleios).`,
  webinar.meetUrl
    ? `Join on ${webinar.platform}: ${webinar.meetUrl}`
    : `The ${webinar.platform} link is in your confirmation email. Can't find it? Check your spam folder.`,
].join("\n\n");

const location =
  webinar.meetUrl ?? `${webinar.platform} (link in your confirmation email)`;

function getEventWindow() {
  const start = new Date(webinar.startsAt);
  const end = new Date(start.getTime() + webinar.durationMinutes * 60_000);
  return { start, end };
}

// 2026-10-17T17:00:00.000Z -> 20261017T170000Z
const toUtcStamp = (date) =>
  date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

export function googleCalendarUrl() {
  const { start, end } = getEventWindow();
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: webinar.calendarTitle,
    dates: `${toUtcStamp(start)}/${toUtcStamp(end)}`,
    details: description,
    location,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

const escapeText = (text) =>
  text
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");

// RFC 5545 caps content lines at 75 octets; continuation lines start with a space.
const foldLine = (line) => line.match(/.{1,73}/g).join("\r\n ");

export function buildIcs() {
  const { start, end } = getEventWindow();
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Teleios//Webinar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${toUtcStamp(start)}-webinar@ekenechris.com`,
    `DTSTAMP:${toUtcStamp(new Date())}`,
    `DTSTART:${toUtcStamp(start)}`,
    `DTEND:${toUtcStamp(end)}`,
    `SUMMARY:${escapeText(webinar.calendarTitle)}`,
    `DESCRIPTION:${escapeText(description)}`,
    `LOCATION:${escapeText(location)}`,
    ...(webinar.meetUrl ? [`URL:${webinar.meetUrl}`] : []),
    "BEGIN:VALARM",
    "ACTION:DISPLAY",
    `DESCRIPTION:${escapeText(webinar.calendarTitle)}`,
    "TRIGGER:-PT30M",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return lines.map(foldLine).join("\r\n") + "\r\n";
}
