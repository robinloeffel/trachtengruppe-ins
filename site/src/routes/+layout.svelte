<script lang="ts">
	import { dev } from "$app/environment";
	import { Footer, Navigation } from "$components";
	import { urlFor } from "$sanity";
	import "$styles/base.scss";

	export let data;

	const navigationItems = data.pages.map(page => ({
		title: page.title,
		href: page.meta?.slug.current ?? ""
	}));

	const favicon = data.settings?.favicon
		&& urlFor(data.settings.favicon)
			.auto("format")
			.size(64, 64)
			.url();

	const footerMail = data.settings?.footerMail ?? "info@trachtengruppe-ins.ch";
</script>

<svelte:head>
	<base href="/" />

	{#if favicon}
		<link href={favicon} rel="icon" />
	{/if}

	{#if !dev}
		<script
			async
			data-domains="trachtengruppe-ins.ch"
			data-website-id="72b46aef-9fd1-4e04-8748-c110329b3faa"
			src="/stats/script.js"
		></script>
	{/if}
</svelte:head>

<Navigation items={navigationItems} />
<slot></slot>
<Footer email={footerMail} items={navigationItems} />
