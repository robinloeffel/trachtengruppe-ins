import { defineField, defineType } from "sanity";

export const hero = defineType({
	name: "hero",
	type: "object",
	title: "Hero",
	fields: [
		defineField({
			name: "image",
			type: "image",
			options: {
				hotspot: true
			},
			fields: [
				defineField({
					name: "alt",
					type: "string",
					title: "Alternativtext",
					validation: Rule => Rule.required()
				}),
				defineField({
					name: "small",
					type: "boolean",
					title: "Klein",
					validation: Rule => Rule.required()
				})
			],
			validation: Rule => Rule.required()
		}),
		defineField({
			name: "title",
			type: "string",
			title: "Überschrift",
			validation: Rule => Rule.required()
		})
	]
});
