<script lang="ts">
	import { Image } from "$components";
	import { urlFor, type SanityHero } from "$sanity";

	export let image: SanityHero["image"];
	export let title: SanityHero["title"];
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

<header class="header" class:image.small>
	<Image
		alt=""
		extraClasses={[ "header-image" ]}
		{height}
		src={imageSource}
		{width}
	/>
</header>

<h1 class="title">{title}</h1>

<style lang="scss">
	@use "$styles/colors";
	@use "$styles/scales";
	@use "$styles/breakpoints";

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

	.title {
		grid-column: 1 / -1;
		font-size: scales.font("48");
		text-align: center;

		@include breakpoints.above-sm {
			grid-column: 2 / -2;
		}
	}
</style>
