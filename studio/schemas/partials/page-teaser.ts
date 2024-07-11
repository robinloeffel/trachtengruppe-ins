import { LinkIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const pageTeaser = defineType({
	name: "pageTeaser",
	type: "object",
	title: "Seiten-Teaser",
	fields: [
		defineField({
			name: "headline",
			type: "string",
			title: "Überschrift",
			validation: Rule => Rule.required()
		}),
		defineField({
			name: "lead",
			type: "string",
			title: "Lead",
			validation: Rule => Rule.required()
		}),
		defineField({
			name: "link",
			type: "reference",
			title: "Link",
			to: [{
				type: "page"
			}],
			validation: Rule => Rule.required()
		})
	],
	preview: {
		select: {
			title: "headline"
		},
		prepare: ({ title }: Record<"title", string>) => ({
			title,
			subtitle: "Teaser",
			media: LinkIcon
		})
	}
});
