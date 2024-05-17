<script lang="ts">
	import { Footer, Navigation } from "$components";
	import { urlFor } from "$sanity";
	import "$styles/base.scss";
	import { VERSION as svelteKitVersion } from "@sveltejs/kit";

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
	<meta name="generator" content={`SvelteKit v${svelteKitVersion}`}/>

	{#if favicon}
		<link href={favicon} rel="icon"/>
	{/if}
</svelte:head>

<Navigation items={navigationItems} />
<slot />
<Footer email={footerMail} items={navigationItems} />
