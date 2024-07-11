import { TiersIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";
import { truncate } from "../../utils/truncate";

export const pageTeaserList = defineType({
	name: "pageTeaserList",
	type: "object",
	title: "Seiten-Teaser-Liste",
	fields: [
		defineField({
			name: "teasers",
			type: "array",
			title: "Teaser",
			of: [
				defineArrayMember({
					type: "pageTeaser"
				})
			],
			validation: Rule => Rule.required()
		})
	],
	preview: {
		select: {
			teaser0: "teasers.0.headline",
			teaser1: "teasers.1.headline",
			teaser2: "teasers.2.headline",
			teaser3: "teasers.3.headline"
		},
		prepare: ({
			teaser0,
			teaser1,
			teaser2,
			teaser3
		}: Record<"teaser0" | "teaser1" | "teaser2" | "teaser3", string>) => ({
			title: truncate([ teaser0, teaser1, teaser2, teaser3 ].filter(Boolean).join(", ")),
			subtitle: "Seiten-Teaser-Liste",
			media: TiersIcon
		})
	}
});
