<script lang="ts">
	import { Grid } from "$components";
	import type { Result } from "$sanity";
	import { PortableText } from "@portabletext/svelte";

	export let text: Result<"richtext", "text">;
</script>

<Grid tag="section">
	<div class="richtext">
		<PortableText components={{}} value={text} />
	</div>
</Grid>

<style lang="scss">
	@use "$styles/scales";
	@use "$styles/colors";
	@use "$styles/breakpoints";

	.richtext {
		@extend %component-gap;

		grid-column: 1 / -1;

		:global(> * + *) {
			margin-top: 1em;
		}

		@include breakpoints.above-sm {
			grid-column: 2 / -2;
		}

		@include breakpoints.above-md {
			grid-column: 3 / -3;
		}

		:global(strong) {
			font-weight: 700;
		}

		:global(a) {
			color: inherit;
		}
	}
</style>
