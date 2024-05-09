<script lang="ts">
	import { Main, PageImage, PageTeaserList, PageTitle } from "$components";
	import { urlFor } from "$sanity";

	export let data;

	const { page } = data;

	const metaTitle = `${page?.meta?.title} — Trachtengruppe Ins und Umgebung`;
	const pageTitle = page?.content?.pageTitle;
	const pageImage = page?.content?.pageImage
		? urlFor(page?.content?.pageImage)
			.auto("format")
			.url()
		: null;
	const pageTeasers = page?.content?.pageTeaser;
</script>

<svelte:head>
	<title>{metaTitle}</title>
</svelte:head>

{#if pageImage}
	<PageImage source={pageImage} />
{/if}

<Main>
	{#if pageTitle}
		<PageTitle title={pageTitle} />
	{/if}

	{#if pageTeasers}
		<PageTeaserList items={pageTeasers} />
	{/if}
</Main>
