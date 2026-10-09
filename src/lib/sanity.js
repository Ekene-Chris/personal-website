// src/lib/sanity.js
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlFor as sanityUrlFor } from "@/sanity/lib/image";

// Function to fetch all blog posts
export async function getAllPosts() {
  return sanityFetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      "categories": categories[]->title,
      "author": author->name,
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
    }
  `);
}

// Function to fetch a single post by slug
export async function getPostBySlug(slug) {
  if (!slug) return null;

  try {
    return await sanityFetch(
      `
      *[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        body,
        mainImage,
        publishedAt,
        "categories": categories[]->title,
        "author": author->{name, image, bio},
      }
    `,
      { slug }
    );
  } catch (error) {
    console.error(`Error fetching post with slug "${slug}":`, error);
    return null;
  }
}

// Slugs of every published post, for generateStaticParams
export async function getAllPostSlugs() {
  return sanityFetch(
    `*[_type == "post" && defined(slug.current)].slug.current`
  );
}

// Re-export the urlFor function
export const urlFor = sanityUrlFor;
