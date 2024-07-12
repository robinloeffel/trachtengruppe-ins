import { pageBySlug } from "$sanity";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async({ params }) => {
	const page = await pageBySlug(params.slug || "/");

	if (page) {
		return { page };
	}

	throw new Error(`Not found: ${params.slug}`);
};
