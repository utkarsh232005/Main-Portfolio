import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

// Validate required environment variables
if (!projectId) {
  throw new Error("Missing required environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID");
}

if (!dataset) {
  throw new Error("Missing required environment variable: NEXT_PUBLIC_SANITY_DATASET");
}

if (!apiVersion) {
  throw new Error("Missing required environment variable: NEXT_PUBLIC_SANITY_API_VERSION");
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Always use fresh data for development
  // token: process.env.SANITY_API_R_W_TOKEN,
});
