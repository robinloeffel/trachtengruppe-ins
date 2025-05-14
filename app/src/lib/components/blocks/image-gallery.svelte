<script lang="ts">
  import { type Result, urlFor } from "$cms";
  import { type LightboxImage, Grid, Image, Lightbox } from "$components";

  interface Props {
    images: Result<"imageGallery", "images">;
  }

  const { images }: Props = $props();

  const uiImages = $derived(
    images.map(record => ({
      _key: record._key,
      alt: record.alt,
      thumb: urlFor(record)
        .format("webp")
        .size(600, 600)
        .url(),
      full: urlFor(record)
        .format("webp")
        .width(1920)
        .url()
    }))
  );

  let lightboxImage = $state<LightboxImage>();
  let bodyRef: HTMLElement;

  $effect(() => {
    bodyRef.classList.toggle("no-scroll", Boolean(lightboxImage));
  });

  const setLightbox = (image?: LightboxImage) => {
    lightboxImage = image;
  };

  const handleCloseLightbox = () => {
    setLightbox();
  };

  const handleWindowKeydown = ({ key }: KeyboardEvent) => {
    if (lightboxImage && key === "Escape") {
      setLightbox();
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

<Lightbox close={handleCloseLightbox} image={lightboxImage} />

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
    display: block;
    overflow: hidden;
    cursor: pointer;
    background: 0;
    border: scales.space("4") solid colors.$misty-rose;
    border-radius: scales.space("16");
  }
</style>
