import { TextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";
import { truncate } from "../../utils/truncate";

export const richtext = defineType({
	name: "richtext",
	type: "object",
	title: "Lauftext",
	fields: [
		defineField({
			name: "text",
			type: "array",
			title: "Textblöcke",
			of: [
				defineArrayMember({
					type: "block"
				})
			],
			validation: Rule => Rule.required()
		})
	],
	preview: {
		select: {
			text0: "text.0.children.0.text"
		},
		prepare: ({ text0 }: Record<"text0", string>) => ({
			title: truncate(text0),
			subtitle: "Lauftext",
			media: TextIcon
		})
	}
});
