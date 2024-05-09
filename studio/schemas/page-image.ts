import { ImageIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const pageImage = defineType({
	name: "pageImage",
	title: "Seitenbild",
	icon: ImageIcon,
	type: "image"
});
