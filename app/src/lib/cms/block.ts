import type { GetPageBySlugQueryResult } from "$generated/sanity-types";

export type PageBuilder = NonNullable<GetPageBySlugQueryResult>["pageBuilder"];
export type PageBuilderBlock = PageBuilder[number];

export type Block<T extends PageBuilderBlock["_type"]> = Extract<
  PageBuilderBlock,
  { _type: T }
>;
