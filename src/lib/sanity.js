// src/lib/sanity.js
import { client } from "@/sanity/lib/client";
import { urlFor as sanityUrlFor } from "@/sanity/lib/image";

// Function to fetch all blog posts
export async function getAllPosts() {
  const posts = await client.fetch(`
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

  return posts;
}

// Function to fetch a single post by slug
export async function getPostBySlug(slug) {
  if (!slug) return null;

  try {
    const post = await client.fetch(
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

    return post;
  } catch (error) {
    console.error(`Error fetching post with slug "${slug}":`, error);
    return null;
  }
}

// Re-export the urlFor function
export const urlFor = sanityUrlFor;

// Also export the client for use in other places
export { client };
