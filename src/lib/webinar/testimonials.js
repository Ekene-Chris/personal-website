// Content for the "Where our alumni are now" section on /webinar.
//
// To add an alumnus, copy an entry, fill it in and delete the `placeholder`
// line. Photos go in /public/images/testimonials (square, ~400px). Entries
// marked `placeholder: true` only appear in development, so the section stays
// hidden in production until there's at least one real testimonial. The same
// applies to the stats.

export const testimonials = [
  {
    placeholder: true,
    name: "[Alumni name]",
    role: "[Role, Company now]",
    photo: null, // e.g. "/images/testimonials/jane-doe.jpg"
    quote: "[Short quote about what changed for them.]",
    before: "[Before, e.g. Mid-level DevOps Engineer]", // optional
    after: "[After, e.g. Senior DevOps Engineer]", // optional
  },
  {
    placeholder: true,
    name: "[Alumni name]",
    role: "[Role, Company now]",
    photo: null,
    quote: "[Short quote about what changed for them.]",
  },
  {
    placeholder: true,
    name: "[Alumni name]",
    role: "[Role, Company now]",
    photo: null,
    quote: "[Short quote about what changed for them.]",
    before: "[Before]",
    after: "[After]",
  },
];

export const stats = [
  { placeholder: true, value: "[00]", label: "[Engineers trained]" },
  { placeholder: true, value: "[00%]", label: "[Promoted or hired]" },
  { placeholder: true, value: "[00]", label: "[Countries]" },
];

const isVisible = (item) =>
  !item.placeholder || process.env.NODE_ENV !== "production";

export const visibleTestimonials = testimonials.filter(isVisible);
export const visibleStats = stats.filter(isVisible);
