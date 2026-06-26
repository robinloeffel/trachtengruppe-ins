<script lang="ts">
  import { imageSrcset } from "$cms/image";
  import type {
    ImageUrlBuilderOptionsWithAliases,
    SanityImageSource
  } from "@sanity/image-url";
  import type { HTMLImgAttributes } from "svelte/elements";

  interface Props extends Omit<HTMLImgAttributes, "src" | "width" | "height"> {
    image: SanityImageSource;
    width: number;
    height: number;
    options?: ImageUrlBuilderOptionsWithAliases;
  }

  const {
    image,
    width,
    height,
    options = {},
    ...props
  }: Props = $props();

  const srcset = $derived(width ? imageSrcset(image, width, options) : null);
  const derivedSizes = $derived(props.sizes ?? `(max-width: ${String(width)}px) 100vw, ${String(width)}px`);

  const {
    class: extraClasses,
    ...attributes
  } = $derived<HTMLImgAttributes>({
    ...props,
    width,
    height
  });
</script>

<img
  class={["image", extraClasses]}
  sizes={derivedSizes}
  {srcset}
  {...attributes}
/>

<style lang="scss">
  .strict {
    width: 100%;
    height: auto;
  }

  .loose {
    width: auto;
    min-width: 0;
    max-width: 100%;
    height: auto;
    min-height: 0;
    max-height: 100%;
  }
</style>
