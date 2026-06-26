import { allPages, settings } from "$cms/client";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
  const [pages, siteSettings] = await Promise.all([allPages(), settings()]);
  return { pages, settings: siteSettings };
};

export const prerender = true;
