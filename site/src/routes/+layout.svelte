<script lang="ts">
	import { Footer, Navigation } from "$components";
	import { urlFor } from "$sanity";
	import "$styles/base.scss";
	import "$styles/utils.scss";

	export let data;

	const navigationItems = data.pages.map(page => ({
		_id: page._id,
		name: page.name,
		href: page.slug.current ?? ""
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
	<meta name="author" content="Trachtengruppe Ins und Umgebung" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<base href="/" />

	{#if favicon}
		<link href={favicon} rel="icon" />
	{/if}
</svelte:head>

<Navigation items={navigationItems} />
<slot></slot>
<Footer email={footerMail} items={navigationItems} />
