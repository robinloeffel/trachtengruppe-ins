<script lang="ts">
	export let title = "";
</script>

<h1 class="page-title">{title}</h1>

<style lang="scss">
	@use "$styles/scales";

	.page-title {
		grid-column: 2 / -2;
		font-size: scales.font("48");
		text-align: center;
	}
</style>
