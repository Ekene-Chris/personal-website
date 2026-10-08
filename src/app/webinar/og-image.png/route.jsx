import { ImageResponse } from "next/og";
import { host, socialImage, webinar } from "@/lib/webinar/config";
import { formatEventTime } from "@/lib/webinar/time";

// Link preview for LinkedIn and WhatsApp shares, generated at build time.
// Served from a ".png" path rather than the opengraph-image file convention:
// with trailingSlash enabled, Next redirects the convention's extensionless
// URL, and some link scrapers don't follow redirects for preview images.
export const dynamic = "force-static";

export function GET() {
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
    { width: socialImage.width, height: socialImage.height }
  );
}
