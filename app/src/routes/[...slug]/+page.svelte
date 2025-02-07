<script lang="ts">
  import { BlockRenderer } from "$components";
  import type { PageProps } from "./$types";

  const { data }: PageProps = $props();

  const blocks = $derived(data.page.pageBuilder);
  const nofollow = $derived(data.page.hidden);
  const title = $derived(
    data.page.slug === "/"
      ? "Trachtengruppe Ins und Umgebung"
      : `${data.page.name} — Trachtengruppe Ins und Umgebung`
  );
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={data.page.meta.description} />
  <meta name="keywords" content={data.page.meta.keywords.join(", ")} />

  {#if nofollow}
    <meta name="robots" content="noindex, nofollow" />
  {/if}
</svelte:head>

<BlockRenderer {blocks} />
