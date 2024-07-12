<script lang="ts">
	import { dev } from "$app/environment";
	import { Footer, Navigation } from "$components";
	import { urlFor } from "$sanity";
	import "$styles/base.scss";
	import "$styles/utils.scss";
	import type { LayoutServerData } from "./$types";

	export let data: LayoutServerData;

	const navigationItems = data.pages.map(page => ({
		_id: page._id,
		name: page.name,
		href: page.slug.current
	}));

	const favicon = data.settings?.favicon
		&& urlFor(data.settings.favicon)
			.auto("format")
			.size(64, 64)
			.url();

	const footerMail = data.settings?.footerMail ?? "info@trachtengruppe-ins.ch";
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<base href="/" />

	{#if favicon}
		<link href={favicon} rel="icon" />
	{/if}

	{#if !dev}
		<script
			async
			data-domains="trachtengruppe-ins.ch"
			data-website-id="7a19e2b9-ca47-4df6-b786-ac63f6170246"
			src="/stats/script.js"
		></script>
	{/if}
</svelte:head>

<Navigation items={navigationItems} />
<main>
	<slot></slot>
</main>
<Footer email={footerMail} items={navigationItems} />
