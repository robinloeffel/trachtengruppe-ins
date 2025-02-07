import { allPages } from "$sanity";
import { text } from "@sveltejs/kit";

export const GET = async () => {
  const base = "https://trachtengruppe-ins.ch";
  const pages = await allPages();
  const paths = pages
    .map(page => page.slug.current)
    .map(slug => slug === "/" ? `${base}\n` : `${base}/${slug}\n`)
    .sort((a, b) => a.localeCompare(b))
    .join("");

  return text(paths);
};
