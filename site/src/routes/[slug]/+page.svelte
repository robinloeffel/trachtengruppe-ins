<script lang="ts">
	import { BlockRenderer } from "$components";

	export let data;
</script>

<svelte:head>
	<title>{`${data.page?.meta?.title} — Trachtengruppe Ins und Umgebung`}</title>
</svelte:head>

{#if data.page?.content}
	<BlockRenderer blocks={data.page.content} />
{/if}
