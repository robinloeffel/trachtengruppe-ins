import { deDELocale } from "@sanity/locale-de-de";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { types } from "./schemas";

export default defineConfig({
	name: "default",
	title: "trachtengruppe-ins",
	projectId: "kcm0835a",
	dataset: "production",
	plugins: [
		structureTool(),
		visionTool(),
		deDELocale()
	],
	schema: {
		types
	}
});
