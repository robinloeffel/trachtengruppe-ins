import { CalendarIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const event = defineType({
	name: "event",
	type: "object",
	title: "Event",
	description: "Ein Ereignis, das in der Agenda dargestellt wird.",
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
			name: "type",
			title: "Typ",
			description: "Der Typ des Ereignisses.",
			type: "string",
			options: {
				list: [{
					title: "Singen",
					value: JSON.stringify({
						label: "Singen",
						value: "singing"
					})
				}, {
					title: "Tanzen",
					value: JSON.stringify({
						label: "Tanzen",
						value: "dancing"
					})
				}, {
					title: "Kindertanzen",
					value: JSON.stringify({
						label: "Kindertanzen",
						value: "dancing-for-kids"
					})
				}, {
					title: "Unterhaltungsabend",
					value: JSON.stringify({
						label: "Unterhaltungsabend",
						value: "entertainment-evening"
					})
				}, {
					title: "Anlass",
					value: JSON.stringify({
						label: "Anlass",
						value: "occasion"
					})
				}, {
					title: "Anderes",
					value: JSON.stringify({
						label: "Anderes",
						value: "other"
					})
				}]
			},
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
