import { defineField, defineType } from "sanity";

export const contact = defineType({
	name: "contact",
	type: "object",
	title: "Kontakt",
	description: "Ein Kontakt mit Name, E-Mail-Adresse und Telefonnummer.",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			description: "Der Name des Kontakts.",
			type: "string",
			validation: Rule => Rule.required()
		}),
		defineField({
			name: "email",
			title: "E-Mail",
			description: "Die E-Mail-Adresse des Kontakts.",
			type: "email",
			validation: Rule => Rule.required()
		}),
		defineField({
			name: "phone",
			title: "Telefon",
			description: "Die Telefonnummer des Kontakts.",
			type: "string",
			validation: Rule => Rule.required()
		})
	],
	preview: {
		select: {
			name: "name",
			email: "email",
			phone: "phone"
		},
		prepare: ({
			name,
			email,
			phone
		}: Record<"email" | "name" | "phone", string>) => ({
			title: name,
			subtitle: `${email} / ${phone}`
		})
	}
});
