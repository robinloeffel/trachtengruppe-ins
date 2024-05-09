<script lang="ts">
	import { Footer, Navigation } from "$components";
	import "$styles/base.scss";

	export let data;

	const { pages } = data;

	const navigationItems = pages.map(item => ({
		title: item.title,
		href: item.meta?.slug.current ?? ""
	})).filter(Boolean);
</script>

<Navigation items={navigationItems} />
<slot />
<Footer />
