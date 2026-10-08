import Image from "next/image";
import {
  FaArrowRight,
  FaCheck,
  FaChevronDown,
  FaLinkedin,
  FaQuoteLeft,
  FaXmark,
} from "react-icons/fa6";
import EventDetails, {
  eventDateLabel,
  eventTimeLabel,
} from "@/components/webinar/EventDetails";
import RegistrationForm from "@/components/webinar/RegistrationForm";
import { host, socialImage, webinar } from "@/lib/webinar/config";
import { visibleStats, visibleTestimonials } from "@/lib/webinar/testimonials";

const headline =
  "Stop Chasing Remote Jobs. Become the Engineer Global Teams Chase.";
const description = `A free live session for mid-level engineers on what separates senior engineers in the AI era, and how to close that gap. ${eventDateLabel}, ${eventTimeLabel}.`;

export const metadata = {
  title: `Free Live Webinar: ${webinar.title} | Teleios`,
  description,
  alternates: { canonical: "/webinar/" },
  openGraph: {
    title: headline,
    description,
    url: "/webinar/",
    siteName: "Ekene Chris · Teleios",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: headline,
    description,
    images: [socialImage.url],
  },
};

const painPoints = [
  "You apply to global roles and hear nothing back.",
  "You have years of experience, but you’re still treated as mid-level.",
  "You keep learning more tools, and nothing seems to change.",
];

const learnings = [
  {
    label: "The stall",
    text: "Why mid-level engineers stall, and what senior engineers do differently.",
  },
  {
    label: "Live walkthrough",
    text: "How a senior engineer reasons through a real architecture or incident decision, walked through live.",
  },
  {
    label: "The path",
    text: "What it takes to become the engineer global teams want to hire in the AI era.",
  },
];

const forYou = [
  "You’re a working DevOps/Cloud or software engineer.",
  "You’re aiming for senior roles and global opportunities.",
  "You’re ready to put in serious work.",
];

const notForYou = [
  "You’re a complete beginner.",
  "You’re looking for shortcuts or CV hacks.",
];

const registerPerks = [
  "Free to attend",
  `${webinar.platform} link sent to your inbox`,
  "Recording sent to everyone who registers",
];

const faqs = [
  {
    question: "Is it free?",
    answer: "Yes. The session is completely free to attend.",
  },
  {
    question: "Will there be a recording?",
    answer:
      "Yes, but it only goes to people who register. Save your seat even if you can’t make it live.",
  },
  {
    question: "I’m a beginner. Is this for me?",
    answer: (
      <>
        This session is for working engineers, so it won’t be the right
        fit yet.{" "}
        {webinar.beginnerProgramsUrl ? (
          <a
            href={webinar.beginnerProgramsUrl}
            className="font-semibold text-caput-mortuum underline underline-offset-4"
          >
            See our programs for engineers who are just starting out.
          </a>
        ) : (
          "We’re working on programs for engineers who are just starting out."
        )}
      </>
    ),
  },
  {
    question: "What platform will it be on?",
    answer: `${webinar.platform}. The link will be emailed to you after you register.`,
  },
];

function Eyebrow({ children, dark = false }) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.2em] ${
        dark ? "text-gold" : "text-caput-mortuum"
      }`}
    >
      {children}
    </p>
  );
}

function SaveSeatLink({ light = false }) {
  return (
    <a
      href="#register"
      className={`group inline-flex w-full items-center justify-center gap-3 rounded-lg px-8 py-4 text-lg font-semibold shadow-lg transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:w-auto ${
        light
          ? "bg-linen text-caput-mortuum hover:bg-white focus-visible:ring-linen focus-visible:ring-offset-caput-mortuum"
          : "bg-caput-mortuum text-white hover:bg-opacity-90 focus-visible:ring-caput-mortuum focus-visible:ring-offset-linen"
      }`}
    >
      Save My Seat
      <FaArrowRight
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      />
    </a>
  );
}

const initials = (name) =>
  name
    .replace(/[^\p{L}\s]/gu, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function WebinarPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_70%_55%_at_50%_40%,rgba(89,36,41,0.12),transparent_70%)]">
        <div className="container mx-auto px-6 pb-20 pt-8 text-center md:pb-28 md:pt-14">
          <p className="inline-flex items-center gap-2 rounded-full border border-caput-mortuum/20 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-caput-mortuum">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-caput-mortuum"
            />
            Free live webinar
          </p>
          <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Stop Chasing Remote Jobs.{" "}
            <span className="block text-caput-mortuum">
              Become the Engineer Global Teams Chase.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-black/75 md:text-xl">
            A free live session for mid-level engineers on what separates
            senior engineers in the AI era, and how to close that gap.
          </p>

          <div className="mt-8">
            <EventDetails align="center" />
          </div>

          <div className="mt-6 flex flex-col items-center">
            <SaveSeatLink />
            <p className="mt-4 text-sm font-medium text-black/70">
              Free · Live · For working engineers
            </p>
          </div>

          <div className="mt-10 inline-flex items-center gap-3 text-left">
            <Image
              src={host.avatar}
              alt=""
              width={48}
              height={48}
              priority
              className="rounded-full"
            />
            <p className="text-sm leading-snug">
              <span className="font-semibold">Hosted by {host.name}</span>
              <br />
              <span className="text-black/70">
                Founder, Teleios · Senior DevOps Engineer, Andela
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* 2. The problem */}
      <section className="bg-black py-20 text-white md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <Eyebrow dark>The problem</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Sound familiar?
            </h2>
            <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {painPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-baseline gap-4 py-6 text-lg md:text-xl"
                >
                  <span
                    aria-hidden="true"
                    className="h-0.5 w-6 shrink-0 -translate-y-1.5 bg-gold"
                  />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-12 text-2xl font-bold leading-snug md:text-4xl">
              The gap isn’t more tutorials.{" "}
              <span className="block text-gold">It’s engineering judgment.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 3. What you’ll learn */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>In this session</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              What you’ll learn
            </h2>
          </div>
          <ol className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
            {learnings.map((item, index) => (
              <li
                key={item.label}
                className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm"
              >
                <span className="text-sm font-bold tracking-widest text-caput-mortuum">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-xl font-bold">{item.label}</h3>
                <p className="mt-3 text-black/75">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. Who this is for / not for */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Who it’s for</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Is this session for you?
            </h2>
            <p className="mt-4 text-lg text-black/75">
              It’s built for engineers who are already doing the work. If
              that isn’t you yet, it’s better to know now.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-kombu-green bg-kombu-green/5 p-8">
              <h3 className="text-xl font-bold text-kombu-green">
                This is for you if…
              </h3>
              <ul className="mt-6 space-y-4">
                {forYou.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-kombu-green text-white">
                      <FaCheck aria-hidden="true" className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-black/10 bg-linen/60 p-8">
              <h3 className="text-xl font-bold">This isn’t for you if…</h3>
              <ul className="mt-6 space-y-4">
                {notForYou.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-caput-mortuum/10 text-caput-mortuum">
                      <FaXmark aria-hidden="true" className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Your host */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-5">
            <div className="md:col-span-2">
              <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={host.photo}
                  alt={host.name}
                  fill
                  sizes="(min-width: 768px) 384px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <Eyebrow>Your host</Eyebrow>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                {host.name}
              </h2>
              <p className="mt-2 font-medium text-caput-mortuum">
                Founder, Teleios · Senior DevOps Engineer, Andela
              </p>
              <p className="mt-6 text-xl font-semibold leading-snug md:text-2xl">
                Chris works at the level he teaches.
              </p>
              <div className="mt-4 space-y-4 text-lg text-black/75">
                <p>
                  As a Senior DevOps Engineer at Andela, he designs and runs
                  production systems for global teams, including AI workloads
                  on Azure. Before that, he led infrastructure design at Kuda,
                  one of Africa’s fastest-growing fintechs, building cloud
                  platforms that serve millions of users.
                </p>
                <p>
                  He founded Teleios to close the gap between Africa’s most
                  ambitious engineers and the global roles they’re capable
                  of, through real-world projects and mentorship from engineers
                  who do this work every day.
                </p>
              </div>
              <a
                href={host.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-caput-mortuum underline-offset-4 hover:underline"
              >
                <FaLinkedin aria-hidden="true" />
                View LinkedIn profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Proof (hidden until there are real testimonials) */}
      {visibleTestimonials.length > 0 && (
        <section className="bg-white py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Proof</Eyebrow>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Where our alumni are now
              </h2>
            </div>

            {visibleStats.length > 0 && (
              <dl className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
                {visibleStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse rounded-2xl bg-linen px-6 py-8 text-center"
                  >
                    <dt className="mt-2 text-sm text-black/70">{stat.label}</dt>
                    <dd className="text-4xl font-bold text-caput-mortuum">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            <ul className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleTestimonials.map((testimonial, index) => (
                <li key={index}>
                  <figure className="flex h-full flex-col rounded-2xl border border-black/5 bg-linen/60 p-8">
                    <FaQuoteLeft
                      aria-hidden="true"
                      className="h-6 w-6 text-caput-mortuum/40"
                    />
                    <blockquote className="mt-4 flex-grow text-lg leading-relaxed">
                      {testimonial.quote}
                    </blockquote>
                    {testimonial.before && testimonial.after && (
                      <p className="mt-6 flex flex-wrap items-center gap-2 text-sm font-medium">
                        <span className="rounded-full bg-black/5 px-3 py-1 text-black/70">
                          {testimonial.before}
                        </span>
                        <FaArrowRight
                          aria-hidden="true"
                          className="text-caput-mortuum"
                        />
                        <span className="sr-only">to</span>
                        <span className="rounded-full bg-kombu-green px-3 py-1 text-white">
                          {testimonial.after}
                        </span>
                      </p>
                    )}
                    <figcaption className="mt-6 flex items-center gap-4 border-t border-black/10 pt-6">
                      {testimonial.photo ? (
                        <Image
                          src={testimonial.photo}
                          alt=""
                          width={48}
                          height={48}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-caput-mortuum font-bold text-white"
                        >
                          {initials(testimonial.name)}
                        </span>
                      )}
                      <span>
                        <span className="block font-semibold">
                          {testimonial.name}
                        </span>
                        <span className="block text-sm text-black/70">
                          {testimonial.role}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 7. Registration */}
      <section
        id="register"
        aria-labelledby="register-heading"
        className="scroll-mt-4 bg-black py-20 text-white md:py-28"
      >
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:sticky lg:top-12 lg:col-span-2 lg:self-start">
              <Eyebrow dark>Free registration</Eyebrow>
              <h2
                id="register-heading"
                className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl"
              >
                Save your seat
              </h2>
              <p className="mt-4 text-lg text-white/75">
                Tell us where you are right now. Your answers help shape the
                session around real blockers.
              </p>
              <div className="mt-8">
                <EventDetails dark />
              </div>
              <ul className="mt-8 hidden space-y-3 text-white/80 lg:block">
                {registerPerks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <FaCheck aria-hidden="true" className="text-gold" />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-white p-6 text-black shadow-2xl sm:p-10">
                <RegistrationForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Questions, answered
              </h2>
            </div>
            <div className="mt-12 divide-y divide-black/10 border-y border-black/10">
              {faqs.map((faq) => (
                <details key={faq.question} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded py-5 text-lg font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-caput-mortuum [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <FaChevronDown
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-caput-mortuum transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <p className="pb-5 text-black/75">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="bg-caput-mortuum py-20 text-white md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Ready to become the engineer global teams chase?
          </h2>
          <div className="mt-8">
            <EventDetails dark align="center" />
          </div>
          <div className="mt-6">
            <SaveSeatLink light />
          </div>
          <p className="mt-4 text-sm text-white/80">
            Free · Live · For working engineers
          </p>
        </div>
      </section>
    </>
  );
}
