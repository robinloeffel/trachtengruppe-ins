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
			type: "datetime"
		}),
		defineField({
			name: "title",
			title: "Titel",
			description: "Der Titel des Ereignisses.",
			type: "string"
		}),
		defineField({
			name: "place",
			title: "Ort",
			description: "Der Ort des Ereignisses.",
			type: "string"
		}),
		defineField({
			name: "special",
			title: "Speziell",
			description: "Ein spezielles Ereignis, das hervorgehoben werden soll.",
			type: "boolean"
		}),
		defineField({
			name: "link",
			title: "Link",
			description: "Ein Link zu weiteren Informationen über das Ereignis.",
			type: "url"
		})
	]
});
