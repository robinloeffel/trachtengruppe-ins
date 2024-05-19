<script lang="ts">
	import { Agenda, Main, PageImage, PageTeaserList, PageTitle } from "$components";
	import type { GetPageBySlugResult } from "$sanity";
	import Contacts from "../content/contacts.svelte";

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

	{#if blocks?.agenda}
		<Agenda items={blocks.agenda} />
	{/if}

	{#if blocks?.contacts}
		<Contacts items={blocks.contacts} />
	{/if}
</Main>
