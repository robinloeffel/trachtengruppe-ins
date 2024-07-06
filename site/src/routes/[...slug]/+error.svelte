<script lang="ts">
	import { Grid, Image } from "$components";
</script>

<svelte:head>
	<title>404 - Seite nicht gefunden</title>
</svelte:head>

<Grid>
	<div>
		<h1>Die gesuchte Seite gibt es nicht</h1>
		<Image alt="" src="https://i.giphy.com/12p3JXHJBgqqCk.webp" />
	</div>
</Grid>

<style lang="scss">
	div {
		display: grid;
		grid-column: 2 / -2;
		gap: 2rem;
		place-items: center;
		text-align: center;
	}
</style>
