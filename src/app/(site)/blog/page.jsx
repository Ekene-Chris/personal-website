// src/app/blog/page.jsx
import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { getAllPosts } from "@/lib/sanity";
import { urlFor } from "@/sanity/lib/image";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog | Ekene Chris",
  description:
    "Read the latest insights on DevOps, cloud architecture, and engineering career development from Ekene Chris.",
};

export default async function Blog() {
  // Fetch blog posts from Sanity
  const posts = await getAllPosts();

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

      {/* Blog Posts or Coming Soon Message */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
                >
                  <div className="h-48 relative">
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">No image</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      {post.categories && post.categories.length > 0 && (
                        <span className="bg-caput-mortuum text-white px-3 py-1 rounded-full text-xs">
                          {post.categories[0]}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt || "Read more about this topic..."}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaCalendarAlt className="mr-1" />
                      <span className="mr-4">
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </span>
                      <FaClock className="mr-1" />
                      <span>{post.estimatedReadingTime || 5} min read</span>
                    </div>
                    <div className="mt-4">
                      {(() => {
                        const postSlug = post?.slug?.current ??
                          (typeof post?.slug === 'string' ? post.slug : null);
                        if (!postSlug) {
                          return (
                            <span className="text-gray-400">Draft (no slug)</span>
                          );
                        }
                        return (
                          <Link
                            href={`/blog/${postSlug}`}
                            className="text-caput-mortuum hover:underline"
                          >
                            Read article →
                          </Link>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-3xl mx-auto text-center">
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
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
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
      </section>
    </div>
  );
}
