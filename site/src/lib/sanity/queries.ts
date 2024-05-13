import groq from "groq";

export const getAllPages = groq`*[_type == "page" && !meta.hidden] | order(meta.order asc)`;
export const getPageBySlug = groq`*[_type == "page" && meta.slug.current == $slug]{
	title,
	meta {
		...,
		"slug": slug.current
	},
	content {
		...,
		pageTeaser[] {
			title,
			description,
			linkLabel,
			"link": linkReference->
		}
	}
}[0]`;
