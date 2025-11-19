import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

// Create a dummy client if projectId is not configured
export const client = projectId ? createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
}) : {
  fetch: async () => {
    console.warn("Sanity client not configured. Returning empty result.");
    return [];
  }
};
