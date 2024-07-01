<script lang="ts">
	export let title = "";
</script>

<h1 class="title">{title}</h1>

<style lang="scss">
	@use "$styles/scales";
	@use "$styles/breakpoints";

	.title {
		grid-column: 1 / -1;
		font-size: scales.font("48");
		text-align: center;

		@include breakpoints.above-sm {
			grid-column: 2 / -2;
		}
	}
</style>
