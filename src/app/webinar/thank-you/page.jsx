import {
  FaCircleCheck,
  FaGoogle,
  FaRegCalendarPlus,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa6";
import EventDetails from "@/components/webinar/EventDetails";
import RegistrationConversion from "@/components/webinar/RegistrationConversion";
import { googleCalendarUrl } from "@/lib/webinar/calendar";
import { webinar } from "@/lib/webinar/config";

export const metadata = {
  title: "You’re in! | Teleios Webinar",
  robots: { index: false, follow: false },
};

const buttonBase =
  "inline-flex items-center justify-center gap-3 rounded-lg px-6 py-3 font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-caput-mortuum focus-visible:ring-offset-2";

export default function ThankYouPage() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 text-center shadow-xl sm:p-12">
          <FaCircleCheck
            aria-hidden="true"
            className="mx-auto h-14 w-14 text-kombu-green"
          />
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            You’re in!
          </h1>
          <p className="mt-4 text-lg text-black/75">
            Your seat for <strong>{webinar.title}</strong> is saved.
          </p>

          <div className="mt-8 rounded-xl bg-linen px-6 py-5">
            <EventDetails align="center" />
          </div>

          <h2 className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-caput-mortuum">
            Add it to your calendar
          </h2>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={googleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} bg-caput-mortuum text-white hover:bg-opacity-90`}
            >
              <FaGoogle aria-hidden="true" />
              Google Calendar
            </a>
            <a
              href="/webinar/calendar.ics"
              className={`${buttonBase} border-2 border-caput-mortuum text-caput-mortuum hover:bg-caput-mortuum hover:text-white`}
            >
              <FaRegCalendarPlus aria-hidden="true" />
              Apple / Outlook (.ics)
            </a>
          </div>

          <p className="mx-auto mt-10 flex max-w-md items-start gap-3 text-left text-black/75">
            <FaRegEnvelope
              aria-hidden="true"
              className="mt-1 shrink-0 text-caput-mortuum"
            />
            Check your inbox for the confirmation email (and your spam folder,
            just in case).
          </p>

          {webinar.whatsappCommunityUrl && (
            <div className="mt-10 border-t border-black/10 pt-8">
              <p className="font-semibold">
                Want reminders and updates on WhatsApp?
              </p>
              <a
                href={webinar.whatsappCommunityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonBase} mt-4 bg-kombu-green text-white hover:bg-opacity-90`}
              >
                <FaWhatsapp aria-hidden="true" />
                Join the WhatsApp community
              </a>
            </div>
          )}
        </div>
      </div>
      <RegistrationConversion />
    </section>
  );
}
