import { pageBySlug } from "$sanity";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async({ params }) => {
	const slug = params.slug === "" ? "/" : params.slug;
	const data = await pageBySlug(slug);

	if (data) {
		return { page: data };
	}

	throw new Error(`Not found: ${slug}`);
};
