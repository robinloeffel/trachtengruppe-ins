<script lang="ts">
	import { page } from "$app/stores";
	import { BlockRenderer } from "$components";

	export let data;

	let pageTitle: string;

	$: pageTitle = $page.params.slug
		? `${data.page?.meta?.title} — Trachtengruppe Ins und Umgebung`
		: "Trachtengruppe Ins und Umgebung";
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

{#if data.page?.content}
	<BlockRenderer blocks={data.page.content} />
{/if}
