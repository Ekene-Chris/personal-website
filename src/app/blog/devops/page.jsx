// src/app/blog/[slug]/page.jsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCalendarAlt, FaUser, FaTag, FaArrowLeft } from "react-icons/fa";
import { getPostBySlug, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Ekene Chris Blog`,
    description: post.excerpt || `Read ${post.title} on Ekene Chris's blog`,
  };
}

const portableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-8 relative w-full h-96">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Blog image"}
            fill
            className="object-contain"
          />
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-caput-mortuum underline"
          target={!value.href.startsWith("/") ? "_blank" : undefined}
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold my-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold my-5">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold my-4">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold my-3">{children}</h4>
    ),
    normal: ({ children }) => <p className="text-lg my-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-caput-mortuum pl-4 italic my-6">
        {children}
      </blockquote>
    ),
  },
};

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24 bg-linen min-h-screen">
      {/* Blog Post Header */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-white hover:text-gray-300 mb-6"
          >
            <FaArrowLeft className="mr-2" /> Back to all articles
          </Link>
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center text-sm">
            <div className="flex items-center mr-6 mb-2">
              <FaCalendarAlt className="mr-2" />
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <FaUser className="mr-2" />
              <span>{post.author}</span>
            </div>
            {post.categories && post.categories.length > 0 && (
              <div className="flex items-center mb-2">
                <FaTag className="mr-2" />
                <span>{post.categories.join(", ")}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.mainImage && (
        <div className="relative w-full h-96 bg-black">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
            className="object-contain"
          />
        </div>
      )}

      {/* Blog Post Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="prose prose-lg">
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      {post.author && (
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto bg-linen p-8 rounded-lg shadow-md">
              <div className="flex items-center">
                {post.author.image && (
                  <div className="w-16 h-16 relative rounded-full overflow-hidden mr-4">
                    <Image
                      src={urlFor(post.author.image).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold">
                    About {post.author.name}
                  </h3>
                  {post.author.bio && (
                    <div className="text-gray-700 mt-2">
                      <PortableText value={post.author.bio} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Posts - Placeholder for now */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            You Might Also Like
          </h2>
          <div className="text-center">
            <Link
              href="/blog"
              className="btn bg-caput-mortuum hover:bg-opacity-90 text-white inline-block"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
