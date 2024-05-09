import { ImagesIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const photoGallery = defineType({
	name: "photoGallery",
	title: "Fotogalerie",
	icon: ImagesIcon,
	type: "array",
	of: [{
		type: "image",
		options: {
			hotspot: true
		}
	}]
});
