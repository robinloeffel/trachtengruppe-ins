<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    tag?: "div" | "section";
    children?: Snippet;
  }

  const { tag = "div", children }: Props = $props();
</script>

<svelte:element this={tag} class="grid">
  {@render children?.()}
</svelte:element>

<style lang="scss">
  @use "$styles/scales";
  @use "$styles/breakpoints";

  .grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: scales.space("32") scales.space("16");
    width: min(100%, 1024px);
    padding: 0 scales.space("24");
    margin: auto;

    @include breakpoints.above-sm {
      grid-template-columns: repeat(12, 1fr);
      gap: scales.space("48") scales.space("24");
    }
  }
</style>
