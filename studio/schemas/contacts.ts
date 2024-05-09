import { EnvelopeIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const contacts = defineType({
	name: "contacts",
	title: "Kontakt",
	icon: EnvelopeIcon,
	type: "array",
	of: [{
		name: "contact",
		title: "Kontakt",
		description: "Ein Kontakt.",
		type: "object",
		fields: [{
			name: "name",
			title: "Name",
			description: "Der Name des Kontakts.",
			type: "string",
			validation: Rule => Rule.required()
		}, {
			name: "email",
			title: "E-Mail",
			description: "Die E-Mail-Adresse des Kontakts.",
			type: "email",
			validation: Rule => Rule.required()
		}, {
			name: "phone",
			title: "Telefon",
			description: "Die Telefonnummer des Kontakts.",
			type: "string",
			validation: Rule => Rule.required()
		}]
	}]
});
