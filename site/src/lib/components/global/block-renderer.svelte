<script lang="ts">
	import { Agenda, Contacts, Hero, PageTeaserList, PhotoGallery } from "$components";
	import type { GetPageBySlugResult } from "$sanity";

	export let blocks: NonNullable<GetPageBySlugResult>["pageBuilder"];
</script>

{#if blocks}
	{#each blocks as block (block._key)}
		{#if block._type === "hero"}
			<Hero {...block} />
		{/if}

		{#if block._type === "pageTeaserList"}
			<PageTeaserList {...block} />
		{/if}

		{#if block._type === "agenda"}
			<Agenda {...block} />
		{/if}

		{#if block._type === "contactList"}
			<Contacts {...block} />
		{/if}

		{#if block._type === "imageGallery"}
			<PhotoGallery {...block} />
		{/if}
	{/each}
{/if}
