<script lang="ts">
  import type { Block } from "$cms";
  import { Grid } from "$components";
  import { PortableText } from "@portabletext/svelte";

  const { text }: Block<"richtext"> = $props();
</script>

<Grid tag="section">
  <div class="richtext">
    <PortableText value={text} />
  </div>
</Grid>

<style lang="scss">
  @use "$styles/scales";
  @use "$styles/colors";
  @use "$styles/breakpoints";

  .richtext {
    @extend %component-gap;

    grid-column: 1 / -1;

    :global(> * + *) {
      margin-top: 1em;
    }

    @include breakpoints.above-sm {
      grid-column: 2 / -2;
    }

    @include breakpoints.above-md {
      grid-column: 3 / -3;
    }

    :global(strong) {
      font-weight: 700;
    }

    :global(a) {
      color: inherit;
    }

    :global(ul),
    :global(ol) {
      margin-left: 1em;
    }
  }
</style>
