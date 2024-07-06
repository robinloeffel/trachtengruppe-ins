import { defineArrayMember, defineField, defineType } from "sanity";

export const pageTeaserList = defineType({
	name: "pageTeaserList",
	type: "object",
	title: "Seiten-Teaser-Liste",
	fields: [
		defineField({
			name: "teasers",
			type: "array",
			title: "Teaser",
			of: [
				defineArrayMember({
					type: "pageTeaser"
				})
			],
			validation: Rule => Rule.required()
		})
	]
});
