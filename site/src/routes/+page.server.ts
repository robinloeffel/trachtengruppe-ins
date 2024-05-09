import { pageBySlug } from "$sanity";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async() => ({
	page: await pageBySlug("/")
});
