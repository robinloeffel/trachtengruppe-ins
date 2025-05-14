<script lang="ts">
  import { type Result, urlFor } from "$cms";
  import { Grid, Image } from "$components";

  interface Props {
    image: Result<"hero", "image">;
    title: Result<"hero", "title">;
    width?: number;
  }

  const { image, title, width = 1920 }: Props = $props();

  const small = $derived(image.small);
  const height = $derived(small ? Math.round(width * 1 / 3) : Math.round(width * 1 / 2));
  const imageSource = $derived(
    urlFor(image)
      .format("webp")
      .size(width, height)
      .url()
  );
</script>

<header class="hero" class:small>
  <Image
    alt=""
    extraClasses={["hero-image"]}
    {height}
    loading="eager"
    src={imageSource}
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

  :global(.hero-image) {
    @extend %component-gap;

    width: 100%;
    max-height: 85vh;
    aspect-ratio: 2 / 1;
    object-fit: cover;
    border-bottom: scales.space("4") solid colors.$light-coral;

    .small & {
      max-height: 40vh;
      aspect-ratio: 3 / 1;
    }
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
