<script lang="ts">
  interface Props {
    src: HTMLImageElement["src"];
    alt: HTMLImageElement["alt"];
    width?: HTMLImageElement["width"];
    height?: HTMLImageElement["height"];
    decoding?: HTMLImageElement["decoding"];
    loading?: HTMLImageElement["loading"];
    extraClasses?: string[];
  }

  const {
    src,
    alt,
    width,
    height,
    decoding,
    loading,
    extraClasses
  }: Props = $props();
</script>

<img
  class={extraClasses?.join(" ")}
  {alt}
  {decoding}
  {height}
  {loading}
  {src}
  {width}
/>
