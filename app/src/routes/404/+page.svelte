<script lang="ts">
  import Grid from "$components/atoms/grid.svelte";
</script>

<svelte:head>
  <title>Seite nicht gefunden &ndash; Trachtengruppe Ins und Umgebung</title>
</svelte:head>

<Grid>
  <div>
    <h1>Die gesuchte Seite gibt es nicht</h1>
    <img alt="" height="239" src="https://i.giphy.com/12p3JXHJBgqqCk.webp" width="287" />
  </div>
</Grid>

<style lang="scss">
  div {
    display: grid;
    grid-column: 2 / -2;
    gap: 2rem;
    place-items: center;
    margin: 2rem 0;
    text-align: center;
  }
</style>
