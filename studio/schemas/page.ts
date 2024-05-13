import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const page = defineType({
	name: "page",
	title: "Seite",
	type: "document",
	icon: DocumentIcon,
	fields: [
		defineField({
			name: "title",
			title: "Titel",
			description: "Der Titel der Seite in der Navigation.",
			type: "string",
			validation: Rule => Rule.required()
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
			fields: [{
				name: "title",
				title: "Titel",
				description: "Der Titel der Seite, wie er im Browser-Tab angezeigt wird.",
				type: "string",
				validation: Rule => Rule.required()
			}, {
				name: "slug",
				title: "URL-Segment",
				description: "Das URL-Segment, das in der Adressleiste des Browsers angezeigt wird.",
				type: "slug",
				validation: Rule => Rule.required(),
				options: {
					source: "title",
					maxLength: 96
				}
			}, {
				name: "description",
				title: "Beschreibung",
				description: "Die kurze Beschreibung der Seite, die auf Google angezeigt wird.",
				type: "text",
				rows: 4,
				validation: Rule => Rule.required()
			}, {
				name: "keywords",
				title: "Schlüsselwörter",
				description: "Eine Liste von kurzen Wörtern, die beschreiben, worum es auf der Seite geht.",
				type: "array",
				of: [{ type: "string" }],
				options: { layout: "tags" },
				validation: Rule => Rule.required()
			}, {
				name: "hidden",
				title: "Versteckt",
				description: "Versteckt die Seite in der Navigation.",
				type: "boolean",
				initialValue: false
			}, {
				name: "order",
				title: "Reihenfolge",
				description: "Die Reihenfolge der Seite in der Navigation.",
				type: "number",
				initialValue: 1
			}]
		}),
		defineField({
			name: "content",
			title: "Inhalt",
			description: "Der Inhalt der Seite.",
			type: "object",
			options: {
				collapsible: true,
				collapsed: true
			},
			fields: [{
				name: "pageImage",
				title: "Seitenbild",
				description: "Das Bild, das oben im Inhaltsbereich angezeigt wird.",
				type: "pageImage"
			}, {
				name: "pageTitle",
				title: "Seitentitel",
				description: "Der Titel, der über dem Inhalt angezeigt wird.",
				type: "pageTitle"
			}, {
				name: "pageTeaser",
				title: "Seitenteaser",
				description: "Kacheln, die auf andere Seiten zeigen.",
				type: "pageTeasers"
			}, {
				name: "photoGallery",
				title: "Fotogalerie",
				description: "Eine Sammlung von Bildern, die in einer Galerie angezeigt werden.",
				type: "photoGallery"
			}, {
				name: "agenda",
				title: "Agenda",
				description: "Eine Liste von Terminen, die auf der Seite angezeigt werden.",
				type: "agenda"
			}, {
				name: "contacts",
				title: "Kontakte",
				description: "Eine Liste von Kontakten, die auf der Seite angezeigt werden.",
				type: "contacts"
			}, {
				name: "textBlocks",
				title: "Textblöcke",
				description: "Eine Liste von Textblöcken, die auf der Seite angezeigt werden.",
				type: "richtext"
			}]
		}),
		defineField({
			name: "children",
			title: "Unterseiten",
			description: "Die Unterseiten der aktuellen Seite.",
			type: "array",
			of: [{
				type: "reference",
				to: [{
					type: "page"
				}]
			}]
		})
	]
});
