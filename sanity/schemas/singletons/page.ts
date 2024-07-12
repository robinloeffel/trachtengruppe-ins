import { DocumentIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const page = defineType({
	name: "page",
	type: "document",
	title: "Seite",
	icon: DocumentIcon,
	fields: [
		defineField({
			name: "name",
			type: "string",
			title: "Name",
			description: "Der Name der Seite (in der Navigation).",
			validation: Rule => Rule.required()
		}),
		defineField({
			name: "slug",
			title: "URL-Segment",
			description: "Das URL-Segment, das in der Adressleiste des Browsers angezeigt wird.",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96
			},
			validation: Rule => Rule.required()
		}),
		defineField({
			name: "meta",
			title: "Metadaten",
			description: "Die Daten der Seite, die von Suchmaschinen verwendet werden.",
			type: "object",
			options: {
				collapsible: true,
				collapsed: true
			},
			fields: [
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
					of: [
						defineArrayMember({
							type: "string"
						})
					],
					options: {
						layout: "tags"
					},
					validation: Rule => Rule.required()
				}),
				defineField({
					name: "order",
					title: "Reihenfolge",
					description: "Die Reihenfolge der Seite in der Navigation.",
					type: "number",
					initialValue: 1,
					validation: Rule => Rule.required()
				})
			],
			validation: Rule => Rule.required()
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
			],
			validation: Rule => Rule.required()
		}),
		defineField({
			name: "hidden",
			title: "Versteckt",
			description: "Robin verwendet das, um Seiten, die zum Testen da sind, zu verstecken.",
			type: "boolean",
			initialValue: false,
			validation: Rule => Rule.required()
		})
	]
});
