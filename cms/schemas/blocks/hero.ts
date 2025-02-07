import { defineField, defineType } from "sanity";
import { truncate } from "../../utils/truncate";

export const hero = defineType({
	name: "hero",
	type: "object",
	title: "Hero",
	description: "Der Hero-Bereich der Seite, der zuoberst angezeigt wird.",
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
					description: "Eine kurze Beschreibung des Bildes für Screenreader.",
					validation: Rule => Rule.required()
				}),
				defineField({
					name: "small",
					type: "boolean",
					title: "Klein",
					description: "Das Bild wird weniger hoch dargestellt.",
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
			description: "Der Titel des Hero-Bereichs und der Seite.",
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
