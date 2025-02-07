<script lang="ts">
  import { urlFor, type Result } from "$cms";
  import { Grid, Image, Lightbox } from "$components";
  import type { ComponentProps } from "svelte";

  type LightboxImage = ComponentProps<typeof Lightbox>["image"];

  interface Props {
    images: Result<"imageGallery", "images">;
  }

  const { images }: Props = $props();

  const uiImages = $derived(
    images.map(record => ({
      _key: record._key,
      alt: record.alt,
      thumb: urlFor(record)
        .auto("format")
        .size(600, 600)
        .url(),
      full: urlFor(record)
        .auto("format")
        .width(1920)
        .url()
    }))
  );

  let lightboxImage = $state<LightboxImage | null>(null);
  let bodyRef: HTMLElement;

  $effect(() => {
    bodyRef.classList.toggle("no-scroll", Boolean(lightboxImage));
  });

  const setLightbox = (image: LightboxImage) => {
    lightboxImage = image;
  };

  const closeLightbox = () => {
    lightboxImage = null;
  };

  const handleWindowKeydown = ({ key }: KeyboardEvent) => {
    if (lightboxImage && key === "Escape") {
      closeLightbox();
    }
  };
</script>

<svelte:window onkeydown={handleWindowKeydown} />
<svelte:body bind:this={bodyRef} />

<Grid tag="section">
  <ul class="image-gallery">
    {#each uiImages as image (image._key)}
      <li class="image-gallery-item">
        <button
          class="image-gallery-button" onclick={() => {
            setLightbox({ src: image.full, alt: image.alt });
          }}
          type="button"
        >
          <Image alt={image.alt} src={image.thumb} />
        </button>
      </li>
    {/each}
  </ul>
</Grid>

{#if lightboxImage}
  <Lightbox
    close={closeLightbox}
    image={lightboxImage}
  />
{/if}

<style lang="scss">
  @use "$styles/scales";
  @use "$styles/colors";
  @use "$styles/breakpoints";

  .image-gallery {
    @extend %component-gap;

    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / -1;
    row-gap: scales.space("24");
    list-style: none;
  }

  .image-gallery-item {
    grid-column: span 3;

    @include breakpoints.above-sm {
      grid-column: span 4;
    }
  }

  .image-gallery-button {
    display: grid;
    place-items: center;
    overflow: hidden;
    cursor: pointer;
    background: 0;
    border: scales.space("4") solid colors.$misty-rose;
    border-radius: scales.space("16");
  }
</style>
