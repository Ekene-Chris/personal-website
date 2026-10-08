import { FaRegCalendar, FaRegClock, FaVideo } from "react-icons/fa6";
import { webinar } from "@/lib/webinar/config";
import { formatEventTime } from "@/lib/webinar/time";
import LocalTime from "./LocalTime";

const hostTime = formatEventTime(
  new Date(webinar.startsAt),
  webinar.hostTimeZone
);

export const eventDateLabel = hostTime.date;
export const eventTimeLabel = `${hostTime.time} ${webinar.hostTimeZoneLabel}`;

// Date, time (WAT plus the visitor's local time) and platform.
export default function EventDetails({ dark = false, align = "left" }) {
  const iconClass = dark ? "text-gold" : "text-caput-mortuum";
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : ""}>
      <ul
        className={`flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2 font-medium ${
          centered ? "items-center sm:justify-center" : ""
        }`}
      >
        <li className="flex items-center gap-2">
          <FaRegCalendar aria-hidden="true" className={iconClass} />
          {eventDateLabel}
        </li>
        <li className="flex items-center gap-2">
          <FaRegClock aria-hidden="true" className={iconClass} />
          {eventTimeLabel}
        </li>
        <li className="flex items-center gap-2">
          <FaVideo aria-hidden="true" className={iconClass} />
          Live on {webinar.platform}
        </li>
      </ul>
      <LocalTime
        className={`mt-2 text-sm ${dark ? "text-white/70" : "text-black/70"}`}
      />
    </div>
  );
}
