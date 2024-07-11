import { CalendarIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const event = defineType({
	name: "event",
	type: "object",
	title: "Event",
	fields: [
		defineField({
			name: "date",
			title: "Datum",
			description: "Das Datum und die Uhrzeit des Ereignisses.",
			type: "datetime",
			validation: Rule => Rule.required()
		}),
		defineField({
			name: "title",
			title: "Titel",
			description: "Der Titel des Ereignisses.",
			type: "string",
			validation: Rule => Rule.required()
		}),
		defineField({
			name: "place",
			title: "Ort",
			description: "Der Ort des Ereignisses.",
			type: "string",
			validation: Rule => Rule.required()
		}),
		defineField({
			name: "special",
			title: "Speziell",
			description: "Ein spezielles Ereignis, das hervorgehoben werden soll.",
			type: "boolean",
			initialValue: false
		}),
		defineField({
			name: "link",
			title: "Link",
			description: "Ein Link zu weiteren Informationen über das Ereignis.",
			type: "url"
		})
	],
	preview: {
		select: {
			title: "title"
		},
		prepare: ({ title }: Record<"title", string>) => ({
			title,
			subtitle: "Event",
			media: CalendarIcon
		})
	}
});
