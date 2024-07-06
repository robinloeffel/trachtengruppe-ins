import groq from "groq";

export const getAllPages = groq`*[_type == "page" && !meta.hidden] | order(meta.order asc)`;
export const getPageBySlug = groq`*[_type == "page" && meta.slug.current == $slug]{
	title,
	meta {
		...,
		"slug": slug.current
	},
	pageBuilder[] {
		...,
		_type == "pageTeaserList" => {
			...,
			teasers[] {
				...,
				"link": link -> meta.slug.current
			}
		}
	}
}[0]`;

export const getSettings = groq`*[_type == "settings"][0]`;
