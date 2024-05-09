import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const settings = defineType({
	name: "settings",
	title: "Einstellungen",
	icon: CogIcon,
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string"
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
			title: "E-Mail-Adresse im Footer",
			description: "Die E-Mail-Adresse, die im Footer angezeigt wird.",
			type: "email",
			validation: Rule => Rule.required()
		})
	]
});
