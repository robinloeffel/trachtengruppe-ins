import { TextIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const richtext = defineType({
	name: "richtext",
	title: "Lauftext",
	icon: TextIcon,
	type: "array",
	of: [{
		type: "image",
		options: {
			hotspot: true
		}
	}]
});
