<script lang="ts">
	import { icons } from "$generated/icons";

	export let name: keyof typeof icons;
	export let size: "small" | "medium" | "large" = "small";
</script>

<span class="icon {size}">
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html icons[name]}
</span>

<style lang="scss">
	@use "$styles/scales";

	.icon {
		display: inline-grid;
		place-content: center;

		&.small {
			width: scales.space("16");
			height: scales.space("16");
		}

		&.medium {
			width: scales.space("24");
			height: scales.space("24");
		}

		&.large {
			width: scales.space("48");
			height: scales.space("48");
		}

		:global(svg) {
			width: 100%;
			height: 100%;
		}
	}
</style>
