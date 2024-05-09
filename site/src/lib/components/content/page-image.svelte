<script lang="ts">
	export let source: HTMLImageElement["src"];
</script>

<header class="header">
	<img
		class="header-image"
		alt=""
		src={source}
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
	}
</style>
