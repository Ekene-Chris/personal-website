import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

export const metadata = {
  title: "Blog | Ekene Chris",
  description:
    "Read the latest insights on DevOps, cloud architecture, and engineering career development from Ekene Chris.",
};

// Placeholder blog data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Designing Multi-Region Kubernetes Deployments for Global Scale",
    excerpt:
      "Learn the key architectural decisions and implementation strategies for deploying applications across multiple regions using Kubernetes.",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "DevOps Architecture",
    image: "/images/content-1.jpg",
  },
  {
    id: 2,
    title: "Communication Patterns That Global Engineering Teams Expect",
    excerpt:
      "Effective communication is crucial for success in global teams. Discover the patterns and practices that are expected in international organizations.",
    date: "March 8, 2025",
    readTime: "6 min read",
    category: "Global Engineer",
    image: "/images/content-2.jpg",
  },
  {
    id: 3,
    title: "System Design Skills That Show You're Senior-Ready",
    excerpt:
      "Explore the architectural thinking patterns and system design approaches that separate mid-level engineers from senior engineers.",
    date: "March 1, 2025",
    readTime: "10 min read",
    category: "Career Development",
    image: "/images/content-3.jpg",
  },
];

export default function Blog() {
  return (
    <div className="pt-24 bg-linen min-h-screen">
      {/* Blog Header */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">Blog</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Insights on DevOps architecture, cloud infrastructure, and
            engineering career development.
          </p>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-white p-10 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Blog Coming Soon!</h2>
            <p className="text-lg mb-8">
              I'm currently working on creating valuable content for the
              engineering community. Check back soon for articles, tutorials,
              and insights on DevOps, cloud architecture, and career
              development.
            </p>
            <Link href="/" className="btn btn-primary inline-block">
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>

      {/* Preview of Upcoming Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Upcoming Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-linen rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <div className="h-48 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="bg-caput-mortuum text-white px-3 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <FaCalendarAlt className="mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <FaClock className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg mb-6">
              Want to be notified when new articles are published?
            </p>
            <form className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 w-full rounded-l-lg focus:outline-none border border-gray-300"
                required
              />
              <button
                type="submit"
                className="bg-caput-mortuum hover:bg-opacity-90 text-white px-6 py-3 rounded-r-lg"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
