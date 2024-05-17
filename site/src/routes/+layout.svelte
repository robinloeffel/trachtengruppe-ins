<script lang="ts">
	import { Footer, Navigation } from "$components";
	import "$styles/base.scss";
	import { VERSION as svelteKitVersion } from "@sveltejs/kit";

	export let data;

	const navigationItems = data.pages.map(page => ({
		title: page.title,
		href: page.meta?.slug.current ?? ""
	}));
</script>

<svelte:head>
	<meta name="generator" content={`SvelteKit v${svelteKitVersion}`}/>
</svelte:head>

<Navigation items={navigationItems} />
<slot />
<Footer items={navigationItems} />
