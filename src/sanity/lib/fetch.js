import { apiVersion, dataset, projectId } from "../env";

// Runs a GROQ query against Sanity's HTTP API. Server-only. Used instead of
// the next-sanity client, which adds ~50 KB of Sanity code to the browser
// bundle of every page that imports it, even when it only runs on the server.
export async function sanityFetch(
  query,
  params = {},
  { useCdn = false, ...fetchOptions } = {}
) {
  const host = useCdn ? "apicdn.sanity.io" : "api.sanity.io";
  const url = new URL(
    `https://${projectId}.${host}/v${apiVersion}/data/query/${dataset}`
  );
  url.searchParams.set("query", query);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(`$${key}`, JSON.stringify(value));
  }

  const response = await fetch(url, fetchOptions);
  if (!response.ok) {
    throw new Error(
      `Sanity query failed (${response.status}): ${await response.text()}`
    );
  }
  const { result } = await response.json();
  return result;
}
