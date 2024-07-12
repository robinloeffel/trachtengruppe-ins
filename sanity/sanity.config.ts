import { deDELocale } from "@sanity/locale-de-de";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { types } from "./schemas";

export default defineConfig({
	title: "Trachtengruppe Ins",
	projectId: "kcm0835a",
	dataset: "production",
	plugins: [
		structureTool(),
		deDELocale()
	],
	scheduledPublishing: {
		enabled: false
	},
	tasks: {
		enabled: false
	},
	schema: {
		types
	}
});
