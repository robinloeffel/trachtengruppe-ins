import { defineArrayMember, defineField, defineType } from "sanity";

export const contactList = defineType({
	name: "contactList",
	type: "object",
	title: "Kontakt-Liste",
	fields: [
		defineField({
			name: "contacts",
			type: "array",
			title: "Kontakte",
			of: [
				defineArrayMember({
					type: "contact"
				})
			],
			validation: Rule => Rule.required()
		})
	]
});
