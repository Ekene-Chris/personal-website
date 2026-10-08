"use client";

import { useEffect, useState } from "react";
import { webinar } from "@/lib/webinar/config";
import { formatEventTime } from "@/lib/webinar/time";

// Shows the session time in the visitor's own time zone. Rendered after
// hydration because the server can't know the zone. Visitors already on the
// host's zone (most of the audience) see nothing extra, so no space is
// reserved for it; the one-line shift elsewhere is well within CLS budgets.
export default function LocalTime({ className = "" }) {
  const [local, setLocal] = useState(null);

  useEffect(() => {
    const visitorZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (visitorZone === webinar.hostTimeZone) return;

    const start = new Date(webinar.startsAt);
    const time = formatEventTime(start);
    // The visitor's own locale gives friendlier zone names ("BST", "EAT")
    // than the "GMT+1" style en-US uses outside the US.
    const zone =
      new Intl.DateTimeFormat(undefined, { timeZoneName: "short" })
        .formatToParts(start)
        .find((part) => part.type === "timeZoneName")?.value ?? time.zone;
    setLocal({ ...time, zone });
  }, []);

  if (!local) return null;

  return (
    <p className={className}>
      Your time: {local.time} {local.zone}, {local.weekday} {local.dayMonth}
    </p>
  );
}
