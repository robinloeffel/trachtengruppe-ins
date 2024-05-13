export const prerender = true;

import { allPages } from "$sanity";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async() => ({
	pages: await allPages()
});
