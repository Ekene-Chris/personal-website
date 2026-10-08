import { buildIcs } from "@/lib/webinar/calendar";

export const dynamic = "force-static";

// "inline" lets iOS Safari offer "Add to Calendar" directly; desktop browsers
// download the file.
export function GET() {
  return new Response(buildIcs(), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'inline; filename="teleios-webinar.ics"',
    },
  });
}
