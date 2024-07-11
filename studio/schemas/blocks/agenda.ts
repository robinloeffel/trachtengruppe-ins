import { CalendarIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";
import { truncate } from "../../utils/truncate";

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
			event0: "events.0.title",
			event1: "events.1.title",
			event2: "events.2.title",
			event3: "events.3.title"
		},
		prepare: ({
			event0,
			event1,
			event2,
			event3
		}: Record<"event0" | "event1" | "event2" | "event3", string>) => ({
			title: truncate([ event0, event1, event2, event3 ].filter(Boolean).join(", ")),
			subtitle: "Agenda",
			media: CalendarIcon
		})
	}
});
