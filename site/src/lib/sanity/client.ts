import { dev } from "$app/environment";
import { createClient } from "@sanity/client";

import type { GetAllPagesResult, GetPageBySlugResult, GetSettingsResult } from "$generated/sanity-types";
import { getAllPages, getPageBySlug, getSettings } from "./queries";

export const client = createClient({
	projectId: "kcm0835a",
	apiVersion: "2024-04-01",
	dataset: "production",
	useCdn: !dev
});

export const allPages = async() => await client.fetch<GetAllPagesResult>(getAllPages);
export const pageBySlug = async(slug: string) => await client.fetch<GetPageBySlugResult>(getPageBySlug, { slug });
export const settings = async() => await client.fetch<GetSettingsResult>(getSettings);
