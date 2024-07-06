import { defineArrayMember, defineField, defineType } from "sanity";

export const agenda = defineType({
	name: "agenda",
	type: "object",
	title: "Agenda",
	fields: [
		defineField({
			name: "events",
			type: "array",
			title: "Events",
			of: [
				defineArrayMember({
					type: "event"
				})
			],
			validation: Rule => Rule.required()
		})
	],
	preview: {
		select: {
			title: "title"
		}
	}
});
