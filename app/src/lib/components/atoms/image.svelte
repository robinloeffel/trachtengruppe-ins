<script lang="ts">
  interface Props extends Partial<
    // eslint-disable-next-line svelte/no-top-level-browser-globals
    Pick<HTMLImageElement, "src" | "alt" | "width" | "height" | "loading" | "fetchPriority">
  > {
    extraClasses?: string[];
  }

  const {
    src,
    alt,
    width,
    height,
    loading,
    fetchPriority,
    extraClasses
  }: Props = $props();
</script>

<img
  class={extraClasses?.join(" ")}
  {alt}
  fetchpriority={fetchPriority}
  {height}
  {loading}
  {src}
  {width}
/>
