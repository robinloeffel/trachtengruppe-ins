<script lang="ts">
	import { page } from "$app/stores";
	import { BlockRenderer } from "$components";

	export let data;

	$: ({ slug } = $page.params);
	$: pageTitle = slug
		? `${data.page.name} — Trachtengruppe Ins und Umgebung`
		: "Trachtengruppe Ins und Umgebung";
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={data.page.meta.description} />
	<meta name="keywords" content={data.page.meta.keywords.join(" ")} />
	<meta name="robots" content={data.page.hidden ? "noindex, nofollow" : "index, follow"} />
	<link href={`https://trachtengruppe-ins.ch/${slug}`} rel="canonical" />
</svelte:head>

<BlockRenderer blocks={data.page.pageBuilder} />
