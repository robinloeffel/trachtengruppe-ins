<script lang="ts">
	import { Grid, Image } from "$components";
	import { urlFor, type Result } from "$sanity";

	export let image: Result<"hero", "image">;
	export let title: Result<"hero", "title">;
	export let width = 1920;

	let height: number;
	let imageSource: string;

	$: height = image.small
		? Math.round(width * 1 / 3)
		: Math.round(width * 1 / 2);

	$: imageSource = urlFor(image)
		.auto("format")
		.size(width, height)
		.url();
</script>

<header class="hero" class:small={image.small}>
	<Image
		alt=""
		extraClasses={[ "hero-image" ]}
		{height}
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
		border-bottom: scales.space("4") solid colors.$hint-of-chili;

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
