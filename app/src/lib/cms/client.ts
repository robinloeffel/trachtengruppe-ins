import { dev } from "$app/environment";
import type { GetAllPagesResult, GetPageBySlugResult, GetSettingsResult } from "$generated/sanity-types";
import { createClient } from "@sanity/client";
import { getAllPagesQuery, getPageBySlugQuery, getSettingsQuery } from "./queries";

export const client = createClient({
  projectId: "kcm0835a",
  apiVersion: "2024-04-01",
  dataset: "production",
  useCdn: !dev
});

export const allPages = async () => await client.fetch<GetAllPagesResult>(getAllPagesQuery);
export const pageBySlug = async (slug: string) => await client.fetch<GetPageBySlugResult>(getPageBySlugQuery, { slug });
export const settings = async () => await client.fetch<GetSettingsResult>(getSettingsQuery);
