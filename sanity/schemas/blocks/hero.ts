import { defineField, defineType } from "sanity";
import { truncate } from "../../utils/truncate";

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
					initialValue: false,
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
	],
	preview: {
		select: {
			title: "title",
			media: "image"
		},
		prepare: ({
			title,
			media
		}: Record<"media" | "title", string>) => ({
			title: truncate(title),
			subtitle: "Hero",
			media
		})
	}
});
