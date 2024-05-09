import { TextIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const pageTitle = defineType({
	name: "pageTitle",
	title: "Seitentitel",
	icon: TextIcon,
	type: "string"
});
