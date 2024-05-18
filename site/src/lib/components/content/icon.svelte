<script lang="ts">
	export let name: string;
</script>

<!-- eslint-disable-next-line svelte/no-unused-class-name -->
<i class={`iconoir-${name}`} />

<style global lang="scss">
	@use "iconoir/css/iconoir.css";
	@use "$styles/scales";

	i {
		font-size: scales.font("16");
	}
</style>
