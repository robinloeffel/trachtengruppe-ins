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
	<meta name="description" content={data.page?.meta?.description} />
	<meta name="keywords" content={data.page?.meta?.keywords.join(" ")} />
</svelte:head>

{#if data.page?.pageBuilder}
	<BlockRenderer blocks={data.page.pageBuilder} />
{/if}
