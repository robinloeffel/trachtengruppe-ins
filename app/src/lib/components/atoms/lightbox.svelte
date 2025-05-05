<script lang="ts">
  import { Icon } from "$components";

  interface LightboxImage {
    src: string;
    alt: string;
  }

  interface Props {
    image: LightboxImage;
    close: () => void;
  }

  const { image, close }: Props = $props();
  let visible = $state(false);

  const show = () => {
    visible = true;
  };
</script>

<div class="lightbox" class:visible>
  <button onclick={close} type="button">
    <Icon name="xmark" size="medium" />
    <span class="sr-only">Schliessen</span>
  </button>
  <img class="image" alt={image.alt} onload={show} src={image.src} />
</div>

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
    opacity: 0;
    backdrop-filter: blur(scales.space("32"));
    transition: opacity 0.5s;

    &.visible {
      opacity: 1;
    }
  }

  img {
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
