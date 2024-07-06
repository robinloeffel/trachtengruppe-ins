import { defineField, defineType } from "sanity";

export const pageTeaser = defineType({
	name: "pageTeaser",
	type: "object",
	title: "Seiten-Teaser",
	fields: [
		defineField({
			name: "headline",
			type: "string",
			title: "Überschrift"
		}),
		defineField({
			name: "lead",
			type: "string",
			title: "Lead"
		}),
		defineField({
			name: "link",
			type: "reference",
			title: "Link",
			to: [{
				type: "page"
			}]
		})
	]
});
