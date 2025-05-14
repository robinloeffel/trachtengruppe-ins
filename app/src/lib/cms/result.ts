import type { GetPageBySlugQueryResult } from "$generated/sanity-types";

export type PageBuilder = NonNullable<GetPageBySlugQueryResult>["pageBuilder"];
export type PageBuilderBlock = PageBuilder[number];

export type Result<
  T extends PageBuilderBlock["_type"],
  K extends keyof Extract<PageBuilderBlock, { _type: T }>
> = Extract<PageBuilderBlock, { _type: T }>[K];
