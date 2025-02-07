import groq from "groq";

export const getAllPages = groq`*[_type == "page" && !hidden] | order(meta.order asc)`;
export const getPageBySlug = groq`*[_type == "page" && slug.current == $slug]{
	name,
	"slug": slug.current,
	meta,
	pageBuilder[] {
		...,
		_type == "pageTeaserList" => {
			...,
			teasers[] {
				...,
				"link": link -> slug.current
			}
		}
	},
	hidden
}[0]`;

export const getSettings = groq`*[_type == "settings"][0]`;
