<script lang="ts">
	// eslint-disable-next-line unicorn/prevent-abbreviations
	export let src: HTMLImageElement["src"];
	export let alt: HTMLImageElement["alt"];
	export let width: HTMLImageElement["width"] | null = null;
	export let height: HTMLImageElement["height"] | null = null;
	export let decoding: HTMLImageElement["decoding"] = "async";
	export let loading: HTMLImageElement["loading"] = "lazy";
	export let extraClasses: string[] | null = null;
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
