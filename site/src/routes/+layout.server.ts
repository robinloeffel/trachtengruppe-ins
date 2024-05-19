import { allPages, settings } from "$sanity";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async() => ({
	pages: await allPages(),
	settings: await settings()
});

export const prerender = true;
export const csr = false;
