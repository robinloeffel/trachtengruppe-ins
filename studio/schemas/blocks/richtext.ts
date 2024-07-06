import { defineArrayMember, defineField, defineType } from "sanity";

export const richtext = defineType({
	name: "richtext",
	type: "object",
	title: "Lauftext",
	fields: [
		defineField({
			name: "text",
			type: "array",
			title: "Textblöcke",
			of: [
				defineArrayMember({
					type: "block"
				})
			],
			validation: Rule => Rule.required()
		})
	]
});
