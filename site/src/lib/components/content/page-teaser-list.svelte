<script lang="ts">
	import type { SanityPageTeasers } from "$sanity";

	export let items: SanityPageTeasers;
</script>

<ul class="page-teaser-list">
	{#each items as item (item._key)}
		<li class="page-teaser-item">
			<article class="page-teaser">
				<h2 class="page-teaser-title">{item.title}</h2>
				<p>{item.description}</p>
				<a class="page-teaser-link" href={item.link.meta?.slug.current}>{item.linkLabel}</a>
			</article>
		</li>
	{/each}
</ul>

<style lang="scss">
	@use "$styles/scales";
	@use "$styles/colors";

	.page-teaser-list {
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
