import { allPages } from "$cms";
import { text } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async () => {
  const base = "https://trachtengruppe-ins.ch";
  const pages = await allPages();
  const paths = pages
    .map(page => (page.slug.current === "/" ? "" : page.slug.current))
    .map(slug => `${base}/${slug}\n`)
    .toSorted((a, b) => a.localeCompare(b))
    .join("");

  return text(paths);
};

export const prerender = true;
