<script lang="ts">
	import { Footer, Navigation } from "$components";
	import "$styles/base.scss";

	export let data;

	const navigationItems = data.pages.map(page => ({
		title: page.title,
		href: page.meta?.slug.current ?? ""
	})).filter(Boolean);
</script>

<Navigation items={navigationItems} />
<slot />
<Footer items={navigationItems} />
