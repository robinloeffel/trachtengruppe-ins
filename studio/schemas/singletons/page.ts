import { DocumentIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const page = defineType({
	name: "page",
	type: "document",
	title: "Seite",
	icon: DocumentIcon,
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Titel",
			description: "Der Titel der Seite in der Navigation."
		}),
		defineField({
			name: "meta",
			title: "Metadaten",
			description: "Die Metadaten der Seite, die von Suchmaschinen verwendet werden.",
			type: "object",
			options: {
				collapsible: true,
				collapsed: true
			},
			fields: [
				defineField({
					name: "title",
					title: "Titel",
					description: "Der Titel der Seite, wie er im Browser-Tab angezeigt wird.",
					type: "string",
					validation: Rule => Rule.required()
				}),
				defineField({
					name: "slug",
					title: "URL-Segment",
					description: "Das URL-Segment, das in der Adressleiste des Browsers angezeigt wird.",
					type: "slug",
					validation: Rule => Rule.required(),
					options: {
						source: "title",
						maxLength: 96
					}
				}),
				defineField({
					name: "description",
					title: "Beschreibung",
					description: "Die kurze Beschreibung der Seite, die auf Google angezeigt wird.",
					type: "text",
					rows: 4,
					validation: Rule => Rule.required()
				}),
				defineField({
					name: "keywords",
					title: "Schlüsselwörter",
					description: "Eine Liste von kurzen Wörtern, die beschreiben, worum es auf der Seite geht.",
					type: "array",
					of: [{ type: "string" }],
					options: { layout: "tags" },
					validation: Rule => Rule.required()
				}),
				defineField({
					name: "hidden",
					title: "Versteckt",
					description: "Versteckt die Seite in der Navigation.",
					type: "boolean",
					initialValue: false
				}),
				defineField({
					name: "order",
					title: "Reihenfolge",
					description: "Die Reihenfolge der Seite in der Navigation.",
					type: "number",
					initialValue: 1
				})
			]
		}),
		defineField({
			name: "pageBuilder",
			type: "array",
			title: "Seitenbaukasten",
			description: "Der Inhalt der Seite.",
			of: [
				defineArrayMember({
					type: "hero"
				}),
				defineArrayMember({
					type: "pageTeaserList"
				}),
				defineArrayMember({
					type: "agenda"
				}),
				defineArrayMember({
					type: "contactList"
				}),
				defineArrayMember({
					type: "imageGallery"
				}),
				defineArrayMember({
					type: "richtext"
				})
			]
		})
	]
});
