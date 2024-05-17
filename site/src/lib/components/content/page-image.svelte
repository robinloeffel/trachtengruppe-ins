<script lang="ts">
	import { urlFor, type SanityPageImage } from "$sanity";

	export let image: SanityPageImage["image"];
	export let small: SanityPageImage["small"];

	let height: number;
	let imageSource: string;

	$: {
		height = small
			? Math.round(1280 * 1 / 3)
			: Math.round(1280 * 1 / 2);

		imageSource = urlFor(image)
			.auto("format")
			.size(1280, height)
			.url();
	}
</script>

<header class="header" class:small>
	<img
		class="header-image"
		alt=""
		decoding="async"
		fetchpriority="high"
		{height}
		src={imageSource}
		width="1280"
	>
</header>

<style lang="scss">
	@use "$styles/colors";
	@use "$styles/scales";

	.header {
		border-bottom: scales.space("4") solid colors.$hint-of-chili;
	}

	.header-image {
		width: 100%;
		max-height: 85vh;
		aspect-ratio: 2 / 1;
		object-fit: cover;

		.small & {
			max-height: 40vh;
			aspect-ratio: 3 / 1;
		}
	}
</style>
