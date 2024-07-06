import { defineArrayMember, defineField, defineType } from "sanity";

export const imageGallery = defineType({
	name: "imageGallery",
	type: "object",
	title: "Bildergalerie",
	fields: [
		defineField({
			name: "images",
			type: "array",
			title: "Bilder",
			of: [
				defineArrayMember({
					name: "image",
					type: "image",
					title: "Bild",
					options: {
						hotspot: true
					},
					fields: [
						defineField({
							name: "alt",
							type: "string",
							title: "Alternativtext"
						})
					]
				})
			],
			options: {
				layout: "grid"
			}
		})
	]
});
