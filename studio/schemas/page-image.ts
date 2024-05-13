import { ImageIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const pageImage = defineType({
	name: "pageImage",
	title: "Seitenbild",
	icon: ImageIcon,
	type: "object",
	fields: [{
		name: "image",
		title: "Bild",
		type: "image",
		validation: Rule => Rule.required()
	}, {
		name: "small",
		title: "Klein",
		type: "boolean",
		validation: Rule => Rule.required()
	}],
	initialValue: {
		small: true
	}
});
