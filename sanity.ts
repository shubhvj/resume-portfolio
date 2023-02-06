import { createClient, groq } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

const config = {
  projectId: projectId?.toString(),
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: process.env.NODE_ENV === "production",
};
export const sanityClient = createClient(config);

export const urlFor = (source: any) => {
  return createImageUrlBuilder(sanityClient).image(source);
};
