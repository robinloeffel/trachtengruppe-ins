<script lang="ts">
	import { Main, PageImage, PageTeaserList, PageTitle } from "$components";
	import type { GetPageBySlugResult } from "$sanity";

	export let blocks: NonNullable<GetPageBySlugResult>["content"];
</script>

{#if blocks?.pageImage}
	<PageImage {...blocks.pageImage} />
{/if}

<Main>
	{#if blocks?.pageTitle}
		<PageTitle title={blocks.pageTitle} />
	{/if}

	{#if blocks?.pageTeasers}
		<PageTeaserList items={blocks.pageTeasers} />
	{/if}
</Main>
