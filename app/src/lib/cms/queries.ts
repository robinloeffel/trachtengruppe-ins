import { defineQuery } from "groq";

export const getSettingsQuery = defineQuery(`*[_type == "settings"][0]`);

export const getAllPagesQuery = defineQuery(`*[_type == "page" && !hidden] {
    _id,
    name,
    slug,
    "order": meta.order
  } | order(order asc)
`);

export const getPageBySlugQuery = defineQuery(`*[_type == "page" && slug.current == $slug] {
  name,
  "slug": slug.current,
  meta,
  pageBuilder[] {
    ...,
    _type == "pageTeaserList" => {
      ...,
      teasers[] {
        ...,
        "link": link -> slug.current
      }
    }
  },
  hidden
}[0]`);
