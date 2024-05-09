import { dev } from "$app/environment";
import { createClient } from "@sanity/client";

import { getAllPages, getPageBySlug } from "./queries";
import type { GetAllPagesResult, GetPageBySlugResult } from "./types";

export const client = createClient({
	projectId: "kcm0835a",
	apiVersion: "2024-04-01",
	dataset: "production",
	useCdn: !dev
});

export const allPages = async() => await client.fetch<GetAllPagesResult>(getAllPages);
export const pageBySlug = async(slug: string) => await client.fetch<GetPageBySlugResult>(getPageBySlug, { slug });
