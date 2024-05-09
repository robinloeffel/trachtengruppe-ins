<header class="header">
	<img
		class="header-image"
		alt=""
		src="https://supportculture.customstorage.cloud/supportculture-migros-ch/media/images/ecbc3598-c7fe-4c7c-af18-a15d15.min-1200x1200.format-jpeg.jpg"
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
		max-height: 85dvh;
		aspect-ratio: 2 / 1;
		object-fit: cover;
	}
</style>
