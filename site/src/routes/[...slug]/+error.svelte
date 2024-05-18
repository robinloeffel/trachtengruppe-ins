<script lang="ts">
	import { Main } from "$components";
</script>

<svelte:head>
	<title>404 - Seite nicht gefunden</title>
</svelte:head>

<Main>
	<div>
		<h1>Die gesuchte Seite gibt es nicht. 😪</h1>
		<img alt="" src="https://i.giphy.com/3ohs81rDuEz9ioJzAA.webp" />
	</div>
</Main>

<style lang="scss">
	div {
		display: grid;
		grid-column: 2 / -2;
		gap: 2rem;
		place-items: center;
		text-align: center;
	}
</style>
