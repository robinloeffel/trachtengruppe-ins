import { CalendarIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const agenda = defineType({
	name: "agenda",
	title: "Agenda",
	icon: CalendarIcon,
	type: "array",
	of: [{
		name: "event",
		title: "Event",
		description: "Ein Ereignis in der Agenda",
		type: "object",
		options: {
			collapsible: true,
			collapsed: true
		},
		initialValue: {
			special: false
		},
		fields: [{
			name: "date",
			title: "Datum",
			description: "Das Datum und die Uhrzeit des Ereignisses.",
			type: "datetime",
			validation: Rule => Rule.required()
		}, {
			name: "title",
			title: "Titel",
			description: "Der Titel des Ereignisses.",
			type: "string",
			validation: Rule => Rule.required()
		}, {
			name: "place",
			title: "Ort",
			description: "Der Ort des Ereignisses.",
			type: "string",
			validation: Rule => Rule.required()
		}, {
			name: "special",
			title: "Speziell",
			description: "Ein spezielles Ereignis, das hervorgehoben werden soll.",
			type: "boolean"
		}, {
			name: "link",
			title: "Link",
			description: "Ein Link zu weiteren Informationen über das Ereignis.",
			type: "url"
		}]
	}]
});
