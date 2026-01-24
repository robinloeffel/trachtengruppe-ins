import {
  type ImageUrlBuilderOptionsWithAliases,
  type SanityImageSource,
  createImageUrlBuilder
} from "@sanity/image-url";
import { client } from "./client";

const builder = createImageUrlBuilder(client);

export const imageUrl = (
  source: SanityImageSource,
  options: ImageUrlBuilderOptionsWithAliases = {}
) => builder.image(source)
  .withOptions({
    auto: "format",
    ...options
  })
  .url();

export const imageSrcset = (
  source: SanityImageSource,
  baseWidth: number,
  options: ImageUrlBuilderOptionsWithAliases = {}
): string => [0.2, 0.4, 0.6, 0.8, 1, 1.25, 1.5, 1.75, 2]
  .map(width => Math.round(baseWidth * width))
  .filter(width => width >= 100 && width <= 2560)
  .map(width => `${imageUrl(source, { ...options, width })} ${String(width)}w`)
  .join(", ");
