<main class="main">
	<slot />
</main>

<style lang="scss">
	@use "$styles/scales";

	.main {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: scales.space("48") scales.space("24");
		width: min(100%, 1024px);
		padding: scales.space("96") scales.space("24");
		margin: auto;
	}
</style>
