import { dev } from "$app/environment";
import type {
  GetAllPagesQueryResult,
  GetPageBySlugQueryResult,
  GetSettingsQueryResult
} from "$generated/sanity-types";
import { createClient } from "@sanity/client";
import { getAllPagesQuery, getPageBySlugQuery, getSettingsQuery } from "./queries";

export const client = createClient({
  projectId: "kcm0835a",
  apiVersion: "2025-07-22",
  dataset: "production",
  useCdn: !dev
});

export const allPages = async () => await client.fetch<GetAllPagesQueryResult>(getAllPagesQuery);
export const pageBySlug = async (slug: string) => await client.fetch<GetPageBySlugQueryResult>(getPageBySlugQuery, { slug });
export const settings = async () => await client.fetch<GetSettingsQueryResult>(getSettingsQuery);
