import { formatEventTime } from "./webinar/time";

// Start date of the next Teleios Fellowship cohort (YYYY-MM-DD, WAT). The
// Teleios page shows it until the end of that day, then switches to generic
// "next cohort" wording by itself, so a past date is never displayed. Set it
// to null when no date is confirmed.
const NEXT_COHORT_STARTS_ON = "2026-10-26";

// The cohort's display date (e.g. "26 October 2026") while it's upcoming,
// or null once it has passed or when no date is set.
export function getUpcomingCohortDate(now = Date.now()) {
  if (!NEXT_COHORT_STARTS_ON) return null;
  const endOfStartDay = new Date(`${NEXT_COHORT_STARTS_ON}T23:59:59+01:00`);
  if (now > endOfStartDay.getTime()) return null;
  const { dayMonth, year } = formatEventTime(
    new Date(`${NEXT_COHORT_STARTS_ON}T12:00:00+01:00`),
    "Africa/Lagos"
  );
  return `${dayMonth} ${year}`;
}
