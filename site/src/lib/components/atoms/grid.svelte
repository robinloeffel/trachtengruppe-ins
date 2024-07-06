<div class="grid">
	<slot></slot>
</div>

<style lang="scss">
	@use "$styles/scales";
	@use "$styles/breakpoints";

	.grid {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: scales.space("32") scales.space("16");
		width: min(100%, 1024px);
		padding: 0 scales.space("24");
		margin: auto;

		@include breakpoints.above-sm {
			grid-template-columns: repeat(12, 1fr);
			gap: scales.space("48") scales.space("24");
		}
	}
</style>
