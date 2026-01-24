<script lang="ts">
  import type { Block } from "$cms";
  import { Grid, Image } from "$components";

  interface Props extends Block<"hero"> {
    width?: number;
  }

  const { image, title, width = 1920 }: Props = $props();

  const small = $derived(image.small);
  const height = $derived(small ? Math.round(width * 1 / 3) : Math.round(width * 1 / 2));
</script>

<header class={["hero", { small }]}>
  <Image
    class="hero-image"
    alt=""
    fetchpriority="high"
    {height}
    {image}
    sizes="100vw"
    {width}
  />
  <Grid>
    <h1 class="hero-title">{title}</h1>
  </Grid>
</header>

<style lang="scss">
  @use "$styles/colors";
  @use "$styles/scales";
  @use "$styles/breakpoints";

  .hero {
    @extend %component-gap;
  }

  .hero :global(.hero-image) {
    @extend %component-gap;

    width: 100%;
    max-height: 85vh;
    aspect-ratio: 2 / 1;
    object-fit: cover;
    border-bottom: scales.space("4") solid colors.$light-coral;
  }

  .hero.small :global(.hero-image) {
    max-height: 40vh;
    aspect-ratio: 3 / 1;
  }

  .hero-title {
    grid-column: 1 / -1;
    font-size: scales.font("48");
    text-align: center;

    @include breakpoints.above-sm {
      grid-column: 2 / -2;
    }
  }
</style>
