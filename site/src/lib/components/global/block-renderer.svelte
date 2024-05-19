<script lang="ts">
	import {
		Agenda,
		Contacts,
		Main,
		PageImage,
		PageTeaserList,
		PageTitle,
		PhotoGallery
	} from "$components";
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

	{#if blocks?.agenda}
		<Agenda items={blocks.agenda} />
	{/if}

	{#if blocks?.contacts}
		<Contacts items={blocks.contacts} />
	{/if}

	{#if blocks?.photoGallery}
		<PhotoGallery items={blocks.photoGallery} />
	{/if}
</Main>
