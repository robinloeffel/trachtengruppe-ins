import { defineArrayMember, defineField, defineType } from "sanity";
import { truncate } from "../../utils/truncate";

export const imageGallery = defineType({
	name: "imageGallery",
	type: "object",
	title: "Bildergalerie",
	description: "Eine Bildergalerie mit mehreren Bildern.",
	fields: [
		defineField({
			name: "images",
			type: "array",
			title: "Bilder",
			description: "Die Bilder, die in der Bildergalerie angezeigt werden.",
			of: [
				defineArrayMember({
					name: "image",
					type: "image",
					title: "Bild",
					description: "Das anzuzeigende Bild.",
					options: {
						hotspot: true
					},
					fields: [
						defineField({
							name: "alt",
							type: "string",
							title: "Alternativtext",
							description: "Eine kurze Beschreibung des Bildes für Screenreader.",
							validation: Rule => Rule.required()
						})
					],
					validation: Rule => Rule.required()
				})
			],
			options: {
				layout: "grid"
			},
			validation: Rule => Rule.required()
		})
	],
	preview: {
		select: {
			media: "images.0.asset",
			image0: "images.0.alt",
			image1: "images.1.alt",
			image2: "images.2.alt",
			image3: "images.3.alt"
		},
		prepare: ({
			media,
			image0,
			image1,
			image2,
			image3
		}: Record<"image0" | "image1" | "image2" | "image3" | "media", string>) => ({
			title: truncate([ image0, image1, image2, image3 ].filter(Boolean).join(", ")),
			subtitle: "Bildergalerie",
			media
		})
	}
});
