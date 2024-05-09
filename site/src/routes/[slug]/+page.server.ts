import { pageBySlug } from "$sanity";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async({ params }) => ({
	page: await pageBySlug(params.slug)
});
