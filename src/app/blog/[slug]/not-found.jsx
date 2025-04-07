// src/app/blog/[slug]/not-found.jsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-24 bg-linen min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-white p-10 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Blog Post Not Found</h2>
            <p className="text-lg mb-8">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/blog" className="btn btn-primary inline-block">
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
