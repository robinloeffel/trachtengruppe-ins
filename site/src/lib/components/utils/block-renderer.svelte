<script lang="ts">
	import { Agenda, Contacts, Hero, ImageGallery, PageTeaserList } from "$components";
	import type { PageBuilder } from "$sanity";

	export let blocks: PageBuilder;
</script>

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
		<ImageGallery {...block} />
	{/if}
{/each}
