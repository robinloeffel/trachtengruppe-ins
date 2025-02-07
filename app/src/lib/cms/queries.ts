import { defineQuery } from "groq";

export const getSettings = defineQuery(`*[_type == "settings"][0]`);
export const getAllPages = defineQuery(`*[_type == "page" && !hidden] | order(meta.order asc)`);
export const getPageBySlug = defineQuery(`*[_type == "page" && slug.current == $slug]{
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
