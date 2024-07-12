<script lang="ts">
	import { Grid } from "$components";
	import type { Result } from "$sanity";

	export let teasers: Result<"pageTeaserList", "teasers">;
</script>

<Grid tag="section">
	<ul class="page-teaser-list">
		{#each teasers as teaser (teaser._key)}
			<li class="page-teaser-item">
				<article class="page-teaser">
					<h2 class="page-teaser-title">{teaser.headline}</h2>
					<p>{teaser.lead}</p>
					<a class="page-teaser-link" href={teaser.link}>Mehr erfahren</a>
				</article>
			</li>
		{/each}
	</ul>
</Grid>

<style lang="scss">
	@use "$styles/scales";
	@use "$styles/colors";

	.page-teaser-list {
		@extend %component-gap;

		display: grid;
		grid-template-columns: subgrid;
		grid-column: 1 / -1;
		row-gap: scales.space("24");
		list-style: none;
	}

	.page-teaser-item {
		grid-column: span 6;
	}

	.page-teaser {
		display: grid;
		row-gap: scales.space("16");
		place-items: start;
		padding: scales.space("32");
		border: scales.space("4") solid colors.$misty-rose;
		border-radius: scales.space("24");
	}

	.page-teaser-title {
		font-size: scales.font("16");
		font-weight: 800;
		color: colors.$hint-of-chili;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.page-teaser-link {
		font-size: scales.font("18");
		color: colors.$bloody-red;
		text-decoration: underline solid scales.space("2");
	}
</style>
