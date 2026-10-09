import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaLinkedin,
  FaQuoteLeft,
} from "react-icons/fa6";
import EventDetails from "@/components/webinar/EventDetails";
import { testimonials } from "@/lib/testimonials";
import { webinar } from "@/lib/webinar/config";
import { formatEventTime } from "@/lib/webinar/time";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { urlFor } from "@/sanity/lib/image";

// Rebuild at most hourly so new blog posts show up and the webinar promo
// disappears soon after the session ends.
export const revalidate = 3600;

const webinarStart = new Date(webinar.startsAt);
const webinarEnd = new Date(
  webinarStart.getTime() + webinar.durationMinutes * 60_000
);
const webinarTime = formatEventTime(webinarStart, webinar.hostTimeZone);

const paths = [
  {
    label: "Teleios Fellowship",
    title: "Train at the level global teams hire for",
    text: "An advanced cohort for working engineers, built around real production projects, high standards and mentorship from engineers who do this work every day.",
    href: "/teleios",
    cta: "Explore Teleios",
  },
  {
    label: "The blog",
    title: "Learn from real production systems",
    text: "Deep dives on architecture, DevOps and the move from mid-level to senior, written from hands-on experience.",
    href: "/blog",
    cta: "Read the blog",
  },
  {
    label: "Work with me",
    title: "Get a senior perspective on your systems",
    text: "Technical consulting and mentorship for teams and engineers who want experienced eyes on their architecture and growth.",
    href: "/contact",
    cta: "Get in touch",
  },
];

const experience = ["Andela", "Kuda", "Tek Experts"];

const LATEST_POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt,
  "category": categories[0]->title,
  "readingTime": round(length(pt::text(body)) / 5 / 180)
}`;

// Queries Sanity's HTTP API directly rather than through the next-sanity
// client, which would add ~50 KB of Sanity browser code to the page. If
// Sanity is unreachable the writing section is simply left out.
async function getLatestPosts() {
  try {
    const url = new URL(
      `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}`
    );
    url.searchParams.set("query", LATEST_POSTS_QUERY);
    const response = await fetch(url, { next: { revalidate } });
    if (!response.ok) throw new Error(`Sanity responded ${response.status}`);
    const { result } = await response.json();
    return result ?? [];
  } catch (error) {
    console.error("[home] Could not load posts from Sanity", error);
    return [];
  }
}

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

const buttonBase =
  "group inline-flex items-center justify-center gap-3 rounded-lg px-7 py-4 font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

export default async function Home() {
  const posts = await getLatestPosts();
  const webinarUpcoming = Date.now() < webinarEnd.getTime();

  return (
    <>
      {/* Hero */}
      <section className="bg-linen pb-16 pt-28 md:pb-20 md:pt-36">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              {webinarUpcoming && (
                <Link
                  href="/webinar"
                  className="group mb-6 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-caput-mortuum/20 bg-white/80 py-1.5 pl-1.5 pr-4 text-sm shadow-sm transition hover:border-caput-mortuum/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-caput-mortuum"
                >
                  <span className="rounded-full bg-caput-mortuum px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    Live webinar
                  </span>
                  <span className="font-medium">
                    {webinarTime.weekday}, {webinarTime.dayMonth} ·{" "}
                    {webinarTime.time} {webinar.hostTimeZoneLabel}
                  </span>
                  <FaArrowRight
                    aria-hidden="true"
                    className="text-caput-mortuum transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
              )}

              <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                I help African engineers become the{" "}
                <span className="text-caput-mortuum">
                  senior engineers global teams hire.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-black/75 md:text-xl">
                I’m Ekene Chris, a Senior DevOps Engineer at Andela and the
                founder of Teleios. I design and run production systems for
                global teams, and I teach engineers to work at that level.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={webinarUpcoming ? "/webinar" : "/teleios"}
                  className={`${buttonBase} bg-caput-mortuum text-white shadow-lg hover:bg-opacity-90 focus-visible:ring-caput-mortuum focus-visible:ring-offset-linen`}
                >
                  {webinarUpcoming ? "Join the webinar" : "Explore Teleios"}
                  <FaArrowRight
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/blog"
                  className={`${buttonBase} border-2 border-black/15 text-black hover:border-black/40 focus-visible:ring-caput-mortuum focus-visible:ring-offset-linen`}
                >
                  Read the blog
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[15rem] sm:max-w-xs lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl bg-caput-mortuum md:-bottom-4 md:-right-4"
                />
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-black/5 shadow-xl">
                  <Image
                    src="/images/ekene-portrait.jpg"
                    alt="Ekene Chris"
                    fill
                    priority
                    sizes="(min-width: 1024px) 440px, 384px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-black/10 pt-8 md:mt-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
              Engineering experience at
            </p>
            <ul className="mt-4 flex flex-wrap items-center gap-x-10 gap-y-2 text-2xl font-bold tracking-tight text-black/70">
              {experience.map((company) => (
                <li key={company}>{company}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Upcoming webinar (hidden automatically once it's over) */}
      {webinarUpcoming && (
        <section
          aria-labelledby="webinar-heading"
          className="bg-black py-16 text-white md:py-20"
        >
          <div className="container mx-auto px-6">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <Eyebrow dark>Live webinar</Eyebrow>
                <h2
                  id="webinar-heading"
                  className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight md:text-4xl"
                >
                  Become the Engineer{" "}
                  <span className="text-gold">Global Teams Chase.</span>
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-white/75">
                  A live session for mid-level engineers on what separates
                  senior engineers in the AI era, and how to close that gap.
                </p>
                <div className="mt-6">
                  <EventDetails dark />
                </div>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  href="/webinar"
                  className={`${buttonBase} w-full bg-linen text-caput-mortuum hover:bg-white focus-visible:ring-linen focus-visible:ring-offset-black sm:w-auto`}
                >
                  Save My Seat
                  <FaArrowRight
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
                <p className="mt-3 text-sm text-white/70">
                  Live · For working engineers
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Where to start */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <Eyebrow>Where to start</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Three ways to grow with me
            </h2>
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {paths.map((path, index) => (
              <li key={path.href}>
                <Link
                  href={path.href}
                  className="group flex h-full flex-col rounded-2xl border border-black/10 bg-linen/50 p-8 transition duration-200 hover:-translate-y-1 hover:border-caput-mortuum/40 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-caput-mortuum"
                >
                  <span className="text-sm font-bold tracking-widest text-caput-mortuum">
                    0{index + 1}
                  </span>
                  <span className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
                    {path.label}
                  </span>
                  <h3 className="mt-2 text-balance text-xl font-bold">
                    {path.title}
                  </h3>
                  <p className="mt-3 flex-grow text-black/75">{path.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-caput-mortuum">
                    {path.cta}
                    <FaArrowRight
                      aria-hidden="true"
                      className="text-sm transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Latest writing (from Sanity) */}
      {posts.length > 0 && (
        <section className="bg-linen py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <Eyebrow>From the blog</Eyebrow>
                <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                  Latest writing
                </h2>
              </div>
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 font-semibold text-caput-mortuum"
              >
                All articles
                <FaArrowRight
                  aria-hidden="true"
                  className="text-sm transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
            <ul className="mt-12 grid gap-6 md:grid-cols-3">
              {posts.map((post) => (
                <li key={post._id}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-caput-mortuum"
                  >
                    <div className="relative aspect-[16/10] bg-black/5">
                      {post.mainImage && (
                        <Image
                          src={urlFor(post.mainImage)
                            .width(800)
                            .height(500)
                            .fit("crop")
                            .auto("format")
                            .url()}
                          alt=""
                          fill
                          sizes="(min-width: 768px) 33vw, 100vw"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="flex flex-grow flex-col p-6">
                      {post.category && (
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-kombu-green">
                          {post.category}
                        </span>
                      )}
                      <h3 className="mt-2 text-balance text-lg font-bold leading-snug transition-colors group-hover:text-caput-mortuum">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="mt-2 line-clamp-3 flex-grow text-black/70">
                          {post.excerpt}
                        </p>
                      )}
                      <p className="mt-4 text-sm text-black/60">
                        {post.publishedAt &&
                          new Date(post.publishedAt).toLocaleDateString(
                            "en-GB",
                            { day: "numeric", month: "short", year: "numeric" }
                          )}
                        {post.readingTime
                          ? ` · ${post.readingTime} min read`
                          : ""}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Testimonials: swipeable on mobile, a grid on larger screens */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <Eyebrow>Kind words</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              What colleagues say
            </h2>
          </div>
          <ul
            tabIndex={0}
            aria-label="Testimonials"
            className="-mx-6 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-caput-mortuum md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0"
          >
            {testimonials.map((item) => (
              <li
                key={item.name}
                className="w-[85%] shrink-0 snap-center md:w-auto"
              >
                <figure className="flex h-full flex-col rounded-2xl border border-black/5 bg-linen/60 p-7 md:p-8">
                  <FaQuoteLeft
                    aria-hidden="true"
                    className="h-6 w-6 text-caput-mortuum/40"
                  />
                  <blockquote className="mt-4 flex-grow leading-relaxed text-black/80">
                    {item.testimonial}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4 border-t border-black/10 pt-6">
                    <Image
                      src={item.image}
                      alt=""
                      width={48}
                      height={48}
                      className="h-12 w-12 shrink-0 rounded-full object-cover"
                    />
                    <span>
                      <span className="block font-semibold">{item.name}</span>
                      <span className="block text-sm text-black/70">
                        {item.position}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-black/60 md:hidden">
            Swipe to read more
          </p>
        </div>
      </section>

      {/* Stay in touch */}
      <section className="bg-caput-mortuum py-20 text-white md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
              Let’s stay in touch
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              I share what I’m learning about architecture, DevOps and building
              a global engineering career on LinkedIn.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://www.linkedin.com/in/ekene-chris"
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonBase} bg-linen text-caput-mortuum hover:bg-white focus-visible:ring-linen focus-visible:ring-offset-caput-mortuum`}
              >
                <FaLinkedin aria-hidden="true" />
                Follow on LinkedIn
              </a>
              {webinarUpcoming && (
                <Link
                  href="/webinar"
                  className={`${buttonBase} border-2 border-white/40 text-white hover:border-white focus-visible:ring-linen focus-visible:ring-offset-caput-mortuum`}
                >
                  Save my seat for the webinar
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
