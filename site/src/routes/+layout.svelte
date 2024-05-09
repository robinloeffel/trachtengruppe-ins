<script lang="ts">
	import { Footer, Header, Navigation } from "$lib/components";
	import "$styles/base.scss";
</script>

<Navigation />
<Header />

<main>
	<slot />
</main>

<Footer />
