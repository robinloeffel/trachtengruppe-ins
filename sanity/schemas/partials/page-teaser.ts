import { LinkIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const pageTeaser = defineType({
	name: "pageTeaser",
	type: "object",
	title: "Seiten-Teaser",
	description: "Ein Teaser, der auf eine andere Seite verlinkt.",
	fields: [
		defineField({
			name: "headline",
			type: "string",
			title: "Überschrift",
			description: "Die Überschrift des Teasers.",
			validation: Rule => Rule.required()
		}),
		defineField({
			name: "lead",
			type: "string",
			title: "Lead",
			description: "Der Lauftext des Teasers.",
			validation: Rule => Rule.required()
		}),
		defineField({
			name: "link",
			type: "reference",
			title: "Link",
			description: "Die Seite, auf die der Teaser zeigt.",
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
