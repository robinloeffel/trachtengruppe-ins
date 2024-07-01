<script lang="ts">
	import { Image } from "$components";
	import { urlFor, type SanityPageImage } from "$sanity";

	export let image: SanityPageImage["image"];
	export let small: SanityPageImage["small"];
	export let width = 1920;

	let height: number;
	let imageSource: string;

	$: height = small
		? Math.round(width * 1 / 3)
		: Math.round(width * 1 / 2);

	$: imageSource = urlFor(image)
			.auto("format")
			.size(width, height)
			.url();
</script>

<header class="header" class:small>
	<Image
		alt=""
		extraClasses={[ "header-image" ]}
		{height}
		src={imageSource}
		{width}
	/>
</header>

<style lang="scss">
	@use "$styles/colors";
	@use "$styles/scales";

	.header {
		border-bottom: scales.space("4") solid colors.$hint-of-chili;
	}

	:global(.header-image) {
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
