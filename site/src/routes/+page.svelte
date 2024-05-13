<script lang="ts">
	import { Main, PageImage, PageTeaserList, PageTitle } from "$components";

	export let data;
</script>

<svelte:head>
	<title>{`${data.page?.meta?.title} — Trachtengruppe Ins und Umgebung`}</title>
</svelte:head>

{#if data.page?.content?.pageImage}
	<PageImage {...data.page.content.pageImage} />
{/if}

<Main>
	{#if data.page?.content?.pageTitle}
		<PageTitle title={data.page.content.pageTitle} />
	{/if}

	{#if data.page?.content?.pageTeaser}
		<PageTeaserList items={data.page.content.pageTeaser} />
	{/if}
</Main>
