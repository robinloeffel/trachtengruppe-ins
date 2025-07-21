<script lang="ts" module>
  export interface LightboxImage {
    src: string;
    alt: string;
  }
</script>

<script lang="ts">
  import { Icon, Image } from "$components";

  interface Props {
    image?: LightboxImage | undefined;
    close: VoidFunction;
  }

  const { image, close }: Props = $props();
</script>

{#if image}
  <div class="lightbox">
    <button onclick={close} type="button">
      <Icon name="xmark" size="medium" />
      <span class="sr-only">Schliessen</span>
    </button>
    <Image
      alt={image.alt}
      extraClasses={["image"]}
      fetchPriority="high"
      src={image.src}
    />
  </div>
{/if}

<style lang="scss">
  @use "$styles/colors";
  @use "$styles/scales";

  .lightbox {
    position: fixed;
    inset: 0;
    z-index: 10;
    display: grid;
    place-items: center;
    background-color: color-mix(in srgb, colors.$charcoal 95%, transparent);
    backdrop-filter: blur(scales.space("32"));
  }

  :global(.lightbox .image) {
    inset: 0;
    padding: scales.space("32");
  }

  button {
    position: absolute;
    inset: scales.space("32") scales.space("32") auto auto;
    display: grid;
    color: colors.$white;
    cursor: pointer;
    background: 0;
    border: 0;
  }
</style>
