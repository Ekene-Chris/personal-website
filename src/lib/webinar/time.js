// Formats an instant in a given time zone (or the runtime's own zone when
// timeZone is undefined). Built from parts so the output is identical across
// Node and browsers regardless of ICU version.
export function formatEventTime(date, timeZone) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone,
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    })
      .formatToParts(date)
      .map(({ type, value }) => [type, value])
  );

  return {
    weekday: parts.weekday,
    dayMonth: `${parts.day} ${parts.month}`,
    date: `${parts.weekday}, ${parts.day} ${parts.month} ${parts.year}`,
    time: `${parts.hour}:${parts.minute} ${parts.dayPeriod}`,
    zone: parts.timeZoneName,
  };
}
