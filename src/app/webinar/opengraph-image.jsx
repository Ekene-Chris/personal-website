import { ImageResponse } from "next/og";
import { host, webinar } from "@/lib/webinar/config";
import { formatEventTime } from "@/lib/webinar/time";

// Link preview for LinkedIn and WhatsApp shares. Generated at build time.
export const alt =
  "Stop Chasing Remote Jobs. Become the Engineer Global Teams Chase. A free live webinar with Ekene Chris.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const { date, time } = formatEventTime(
    new Date(webinar.startsAt),
    webinar.hostTimeZone
  );

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: 72,
          background: "#FFF4E9",
          color: "#111111",
          borderTop: "16px solid #592429",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#592429",
          }}
        >
          Free live webinar
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 70,
            lineHeight: 1.08,
            letterSpacing: -1,
          }}
        >
          <span>Stop Chasing Remote Jobs.</span>
          <span style={{ color: "#592429" }}>
            Become the Engineer Global Teams Chase.
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 30,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>{date}</span>
            <span style={{ color: "#592429" }}>
              {time} {webinar.hostTimeZoneLabel} · Live on {webinar.platform}
            </span>
          </div>
          <span style={{ color: "rgba(17,17,17,0.7)" }}>
            {host.name} · Teleios
          </span>
        </div>
      </div>
    ),
    size
  );
}
