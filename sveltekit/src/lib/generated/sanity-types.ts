/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Settings = {
  _id: string;
  _type: "settings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  favicon: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  footerMail: string;
};

export type PageTeaser = {
  _type: "pageTeaser";
  headline: string;
  lead: string;
  link: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "page";
  };
};

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  slug: Slug;
  meta: {
    description: string;
    keywords: Array<string>;
    order: number;
  };
  pageBuilder: Array<({
    _key: string;
  } & Hero) | ({
    _key: string;
  } & PageTeaserList) | ({
    _key: string;
  } & Agenda) | ({
    _key: string;
  } & ContactList) | ({
    _key: string;
  } & ImageGallery) | ({
    _key: string;
  } & Richtext)>;
  hidden: boolean;
};

export type Slug = {
  _type: "slug";
  current: string;
  source?: string;
};

export type Event = {
  _type: "event";
  date: string;
  title: string;
  place: string;
  special?: boolean;
  link?: string;
};

export type Contact = {
  _type: "contact";
  name: string;
  email: string;
  phone: string;
};

export type Richtext = {
  _type: "richtext";
  text: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type PageTeaserList = {
  _type: "pageTeaserList";
  teasers: Array<{
    _key: string;
  } & PageTeaser>;
};

export type ImageGallery = {
  _type: "imageGallery";
  images: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt: string;
    _type: "image";
    _key: string;
  }>;
};

export type Hero = {
  _type: "hero";
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt: string;
    small: boolean;
    _type: "image";
  };
  title: string;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type ContactList = {
  _type: "contactList";
  contacts: Array<{
    _key: string;
  } & Contact>;
};

export type Agenda = {
  _type: "agenda";
  events: Array<{
    _key: string;
  } & Event>;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Settings | PageTeaser | Page | Slug | Event | Contact | Richtext | PageTeaserList | ImageGallery | Hero | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | ContactList | Agenda;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ../site/src/lib/sanity/queries.ts
// Variable: getAllPages
// Query: *[_type == "page" && !hidden] | order(meta.order asc)
export type GetAllPagesResult = Array<{
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  slug: Slug;
  meta: {
    description: string;
    keywords: Array<string>;
    order: number;
  };
  pageBuilder: Array<({
    _key: string;
  } & Agenda) | ({
    _key: string;
  } & ContactList) | ({
    _key: string;
  } & Hero) | ({
    _key: string;
  } & ImageGallery) | ({
    _key: string;
  } & PageTeaserList) | ({
    _key: string;
  } & Richtext)>;
  hidden: boolean;
}>;
// Variable: getPageBySlug
// Query: *[_type == "page" && slug.current == $slug]{	name,	"slug": slug.current,	meta,	pageBuilder[] {		...,		_type == "pageTeaserList" => {			...,			teasers[] {				...,				"link": link -> slug.current			}		}	},	hidden}[0]
export type GetPageBySlugResult = {
  name: string;
  slug: string;
  meta: {
    description: string;
    keywords: Array<string>;
    order: number;
  };
  pageBuilder: Array<{
    _key: string;
    _type: "agenda";
    events: Array<{
      _key: string;
    } & Event>;
  } | {
    _key: string;
    _type: "contactList";
    contacts: Array<{
      _key: string;
    } & Contact>;
  } | {
    _key: string;
    _type: "hero";
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt: string;
      small: boolean;
      _type: "image";
    };
    title: string;
  } | {
    _key: string;
    _type: "imageGallery";
    images: Array<{
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt: string;
      _type: "image";
      _key: string;
    }>;
  } | {
    _key: string;
    _type: "pageTeaserList";
    teasers: Array<{
      _key: string;
      _type: "pageTeaser";
      headline: string;
      lead: string;
      link: string;
    }>;
  } | {
    _key: string;
    _type: "richtext";
    text: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }>;
  }>;
  hidden: boolean;
} | null;
// Variable: getSettings
// Query: *[_type == "settings"][0]
export type GetSettingsResult = {
  _id: string;
  _type: "settings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  favicon: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  footerMail: string;
} | null;
