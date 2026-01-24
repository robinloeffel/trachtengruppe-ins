<script lang="ts">
  import type { Block } from "$cms";
  import { Grid, Icon, Image } from "$components";
  import type { KeyboardEventHandler } from "svelte/elements";

  const { images }: Block<"imageGallery"> = $props();

  let bodyRef: HTMLBodyElement;
  let lightboxImageIndex = $state.raw(-1);
  const lightboxImage = $derived(images[lightboxImageIndex]);

  $effect(() => {
    bodyRef.classList.toggle("no-scroll", Boolean(lightboxImage));
  });

  const closeImageGallery = () => {
    lightboxImageIndex = -1;
  };

  const goToNextImage = () => {
    lightboxImageIndex = (lightboxImageIndex + 1) % images.length;
  };

  const goToPrevImage = () => {
    lightboxImageIndex = (images.length + lightboxImageIndex - 1) % images.length;
  };

  const handleWindowKeydown: KeyboardEventHandler<Window> = ({ key }) => {
    if (lightboxImage) {
      switch (key) {
        case "Escape": {
          closeImageGallery();
          break;
        }
        case "ArrowLeft": {
          goToPrevImage();
          break;
        }
        case "ArrowRight": {
          goToNextImage();
          break;
        }
        default: {
          break;
        }
      }
    }
  };
</script>

<svelte:body bind:this={bodyRef} />
<svelte:window onkeydown={handleWindowKeydown} />

<Grid tag="section">
  <ul class="image-gallery">
    {#each images as image, index (image._key)}
      <li class="image-gallery-item">
        <button
          class="image-gallery-button"
          onclick={() => {
            lightboxImageIndex = index;
          }}
          type="button"
        >
          <Image
            class="image-gallery-image strict"
            alt={image.alt}
            fetchpriority="low"
            height={600}
            {image}
            loading="lazy"
            sizes="(width > 1024px) 310px, (width > 600px) 33vw, 50vw"
            width={600}
          />
        </button>
      </li>
    {/each}
  </ul>
  <div class="image-gallery-lightbox">
    {#if lightboxImage}
      <button
        class="image-gallery-lightbox-button"
        data-action="close"
        onclick={closeImageGallery}
        type="button"
      >
        <Icon name="xmark" size="medium" />
        <span class="sr-only">Schliessen</span>
      </button>

      <button
        class="image-gallery-lightbox-button"
        data-action="prev"
        onclick={goToPrevImage}
        type="button"
      >
        <Icon name="arrow-left" size="medium" />
        <span class="sr-only">Vorheriges Bild</span>
      </button>

      <button
        class="image-gallery-lightbox-button"
        data-action="next"
        onclick={goToNextImage}
        type="button"
      >
        <Icon name="arrow-right" size="medium" />
        <span class="sr-only">Nächstes Bild</span>
      </button>

      <Image
        class="image-gallery-lightbox-image loose"
        alt={lightboxImage.alt}
        fetchpriority="high"
        height={1080}
        image={lightboxImage}
        sizes="calc(100vw - 8rem)"
        width={1920}
      />

      <span class="image-gallery-lightbox-nav">
        {lightboxImageIndex + 1} von {images.length}
      </span>
    {/if}
  </div>
</Grid>

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

  .image-gallery-lightbox {
    position: fixed;
    inset: 0;
    z-index: 10;
    display: grid;
    visibility: hidden;
    place-items: center;
    width: 100%;
    height: 100%;
    padding: scales.space("64");
    background-color: color-mix(in srgb, colors.$charcoal 95%, transparent);
    opacity: 0;
    backdrop-filter: blur(scales.space("32"));

    &:not(:empty) {
      visibility: visible;
      opacity: 1;
    }
  }

  .image-gallery-lightbox-button {
    position: absolute;
    display: grid;
    color: colors.$white;
    cursor: pointer;
    background: 0;
    border: 0;

    &[data-action="close"] {
      inset: scales.space("16") auto auto auto;
    }

    &[data-action="prev"] {
      inset: auto auto auto scales.space("16");
    }

    &[data-action="next"] {
      inset: auto scales.space("16") auto auto;
    }
  }

  .image-gallery-lightbox-nav {
    position: absolute;
    inset: auto auto scales.space("16") auto;
    font-size: scales.font("14");
    font-variant-numeric: tabular-nums;
    color: colors.$white;
  }
</style>
