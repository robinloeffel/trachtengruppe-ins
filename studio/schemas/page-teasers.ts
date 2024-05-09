import { defineType } from "sanity";

export const pageTeasers = defineType({
	name: "pageTeasers",
	title: "Seitenteaser",
	type: "array",
	of: [{
		name: "pageTeaser",
		title: "Seitenteaser",
		description: "Ein Teaser für eine Seite",
		type: "object",
		options: {
			collapsible: true,
			collapsed: true
		},
		fields: [{
			name: "title",
			title: "Titel",
			type: "string",
			validation: Rule => Rule.required()
		}, {
			name: "description",
			title: "Beschreibung",
			type: "text",
			validation: Rule => Rule.required()
		}, {
			name: "linkLabel",
			title: "Link-Text",
			type: "string",
			validation: Rule => Rule.required()
		}, {
			name: "linkReference",
			title: "Link-Ziel",
			type: "reference",
			to: [{
				type: "page"
			}],
			validation: Rule => Rule.required()
		}]
	}]
});
