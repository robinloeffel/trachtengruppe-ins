export { allPages, pageBySlug, settings } from "./client";
export { urlFor } from "./image";

export type {
	PageBuilder,
	Result
} from "./result";

export type {
	GetAllPagesResult,
	GetPageBySlugResult,
	GetSettingsResult
} from "$generated/sanity-types";
