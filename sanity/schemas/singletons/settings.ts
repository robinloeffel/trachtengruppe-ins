import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const settings = defineType({
	name: "settings",
	title: "Einstellungen",
	type: "document",
	icon: CogIcon,
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			validation: Rule => Rule.required()
		}),
		defineField({
			name: "favicon",
			title: "Favicon",
			description: "Das Bild, das in der Adressleiste des Browsers angezeigt wird.",
			type: "image",
			validation: Rule => Rule.required()
		}),
		defineField({
			name: "footerMail",
			title: "E-Mail-Adresse in der Fusszeile",
			description: "Die E-Mail-Adresse, die in der Fusszeile der Webseite angezeigt wird.",
			type: "email",
			validation: Rule => Rule.required()
		})
	]
});
