import { allPages, pageBySlug } from "$cms";
import { error } from "@sveltejs/kit";
import type { EntryGenerator, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const page = await pageBySlug(params.slug || "/");
  return page ? { page } : error(404, { message: "not found" });
};

export const entries: EntryGenerator = async () => {
  const pages = await allPages();
  return pages.map(page => ({
    slug: page.slug.current === "/" ? "" : page.slug.current
  })).toSorted((a, b) => a.slug.localeCompare(b.slug));
};
