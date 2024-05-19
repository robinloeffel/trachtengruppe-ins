<script lang="ts">
	import { browser } from "$app/environment";
	import { Icon } from "$components";
	import { urlFor, type SanityPhotoGallery } from "$sanity";
	import type { KeyboardEventHandler } from "svelte/elements";

	export let items: SanityPhotoGallery;

	const galleryItems = items.map(item => ({
		id: item._key,
		thumbnail: urlFor(item)
			.auto("format")
			.size(600, 600)
			.url(),
		full: urlFor(item)
			.auto("format")
			.width(1920)
			.url()
	}));

	let isGalleryOpen = false;
	let openGalleryItem: typeof galleryItems[number] | null;

	const openLightbox = (id: string) => {
		isGalleryOpen = true;
		openGalleryItem = galleryItems.find(item => item.id === id) ?? null;

		if (browser) {
			document.body.classList.add("no-scroll");
		}
	};

	const openNextImage = () => {
		if (openGalleryItem) {
			const currentIndex = galleryItems.indexOf(openGalleryItem);
			openGalleryItem = galleryItems[currentIndex + 1] ?? galleryItems.at(0) ?? null;
		}
	};

	const openPreviousImage = () => {
		if (openGalleryItem) {
			const currentIndex = galleryItems.indexOf(openGalleryItem);
			openGalleryItem = galleryItems[currentIndex - 1] ?? galleryItems.at(-1) ?? null;
		}
	};

	const closeLightbox = () => {
		isGalleryOpen = false;

		if (browser) {
			document.body.classList.remove("no-scroll");
		}
	};

	const navigateLightbox: KeyboardEventHandler<Window> = ({ key }) => {
		if (isGalleryOpen) {
			switch (key) {
				case "Escape": {
					closeLightbox();
					break;
				}
				case "ArrowLeft": {
					openPreviousImage();
					break;
				}
				case "ArrowRight": {
					openNextImage();
					break;
				}
				default: {
					break;
				}
			}
		}
	};
</script>

<svelte:window on:keydown={navigateLightbox} />

<ul class="photo-gallery">
	{#each galleryItems as galleryItem (galleryItem.id)}
		<li class="photo-gallery-item">
			<button
				class="photo-gallery-thumb"
				type="button"
				on:click={() => openLightbox(galleryItem.id)}
			>
				<img
					alt=""
					decoding="async"
					loading="lazy"
					src={galleryItem.thumbnail}
				/>
			</button>
		</li>
	{/each}
</ul>

<div class="lightbox" class:open={isGalleryOpen} aria-hidden="true">
	<button class="lightbox-close" type="button" on:click={closeLightbox}>
		<Icon name="x-mark" size="large" />
	</button>
	{#if openGalleryItem?.full}
		<img class="lightbox-image" alt="" src={openGalleryItem.full} />
	{/if}
	<div class="lightbox-controls">
		<button class="lightbox-prev" type="button" on:click={openPreviousImage}>
			<Icon name="arrow-left" size="large" />
		</button>
		<button class="lightbox-next" type="button" on:click={openNextImage}>
			<Icon name="arrow-right" size="large" />
		</button>
	</div>
</div>

<style lang="scss">
	@use "$styles/scales";
	@use "$styles/colors";

	.photo-gallery {
		display: grid;
		grid-template-columns: subgrid;
		grid-column: 1 / -1;
		row-gap: scales.space("24");
		list-style: none;
	}

	.photo-gallery-item {
		grid-column: span 4;
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

	.lightbox {
		position: fixed;
		inset: 0;
		z-index: 9;
		display: grid;
		place-items: center;
		padding: scales.space("128");
		pointer-events: none;
		backdrop-filter: blur(scales.space("32")) brightness(20%);
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
		transition-delay: 0.5s;

		&.open {
			pointer-events: auto;
			opacity: 1;
			transition-delay: 0s;
		}
	}

	.lightbox-image {
		display: block;
		width: 100%;
		max-width: 100%;
		height: 100%;
		max-height: 100%;
		object-fit: contain;
		opacity: 0;
		transition:
			opacity 0.5s ease-in-out,
			scale 0.5s ease-in-out,
			translate 0.5s ease-in-out;
		transform-origin: bottom;
		scale: 95%;
		translate: 0 5%;

		.open & {
			opacity: 1;
			transition-delay: 0.5s;
			scale: 100%;
			translate: 0 0;
		}
	}

	.lightbox-close {
		position: absolute;
		top: scales.space("48");
		color: colors.$white;
		cursor: pointer;
		background: 0;
		border: 0;
	}

	.lightbox-controls {
		position: absolute;
		bottom: scales.space("48");
		display: flex;
		column-gap: scales.space("16");
	}

	.lightbox-prev,
	.lightbox-next {
		color: colors.$white;
		cursor: pointer;
		background: 0;
		border: 0;
	}
</style>
