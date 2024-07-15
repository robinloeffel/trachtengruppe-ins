import { UlistIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";
import { truncate } from "../../utils/truncate";

export const contactList = defineType({
	name: "contactList",
	type: "object",
	title: "Kontakt-Liste",
	description: "Eine Liste von Kontakten.",
	fields: [
		defineField({
			name: "contacts",
			type: "array",
			title: "Kontakte",
			description: "Die Liste von Kontakten, die in der Kontakt-Liste dargestellt werden.",
			of: [
				defineArrayMember({
					type: "contact"
				})
			],
			validation: Rule => Rule.required()
		})
	],
	preview: {
		select: {
			contact0: "contacts.0.name",
			contact1: "contacts.1.name",
			contact2: "contacts.2.name",
			contact3: "contacts.3.name"
		},
		prepare: ({
			contact0,
			contact1,
			contact2,
			contact3
		}: Record<"contact0" | "contact1" | "contact2" | "contact3", string>) => ({
			title: truncate([ contact0, contact1, contact2, contact3 ].filter(Boolean).join(", ")),
			subtitle: "Kontakt-Liste",
			media: UlistIcon
		})
	}
});
