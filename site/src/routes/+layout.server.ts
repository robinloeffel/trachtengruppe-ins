import { allPages } from "$sanity";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async() => ({
	pages: await allPages()
});

export const prerender = true;
