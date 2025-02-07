import { allPages, settings } from "$cms";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => ({
  pages: await allPages(),
  settings: await settings()
});

export const prerender = true;
