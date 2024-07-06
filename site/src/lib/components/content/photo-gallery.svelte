<script lang="ts">
	import { Image, Lightbox } from "$components";
	import { urlFor, type Result } from "$sanity";

	export let images: Result<"imageGallery", "images">;

	const uiImages = images.map(item => ({
		_key: item._key,
		alt: item.alt,
		thumbnail: urlFor(item)
			.auto("format")
			.size(600, 600)
			.url(),
		full: urlFor(item)
			.auto("format")
			.width(1920)
			.url()
	}));

	let isLightboxOpen = false;
	let openLightboxElementIndex = -1;

	const openLightbox = (index: number) => {
		isLightboxOpen = true;
		openLightboxElementIndex = index;
	};
</script>

<ul class="photo-gallery">
	{#each uiImages as galleryImage, index (galleryImage._key)}
		<li class="photo-gallery-item">
			<button
				class="photo-gallery-thumb"
				type="button"
				on:click={() => {
					openLightbox(index);
				}}
			>
				<Image alt={galleryImage.alt} src={galleryImage.thumbnail} />
			</button>
		</li>
	{/each}
</ul>

<Lightbox
	bind:open={isLightboxOpen}
	bind:index={openLightboxElementIndex}
	bind:itemsCount={uiImages.length}
>
	{#each uiImages as lightboxImage (lightboxImage._key)}
		<li>
			<Image alt={lightboxImage.alt} src={lightboxImage.full} />
		</li>
	{/each}
</Lightbox>

<style lang="scss">
	@use "$styles/scales";
	@use "$styles/colors";
	@use "$styles/breakpoints";

	.photo-gallery {
		display: grid;
		grid-template-columns: subgrid;
		grid-column: 1 / -1;
		row-gap: scales.space("24");
		list-style: none;
	}

	.photo-gallery-item {
		grid-column: span 3;

		@include breakpoints.above-sm {
			grid-column: span 4;
		}
	}

	.photo-gallery-thumb {
		display: grid;
		place-items: center;
		overflow: hidden;
		cursor: pointer;
		background: 0;
		border: scales.space("4") solid colors.$misty-rose;
		border-radius: scales.space("16");
	}
</style>
