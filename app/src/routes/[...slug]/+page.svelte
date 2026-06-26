<script lang="ts">
  import { page } from "$app/state";
  import BlockRenderer from "$components/utils/block-renderer.svelte";
  import type { PageProps } from "./$types";

  const { data }: PageProps = $props();

  const blocks = $derived(data.page.pageBuilder);
  const nofollow = $derived(data.page.hidden);
  const title = $derived(
    data.page.slug === "/"
      ? "Trachtengruppe Ins und Umgebung"
      : `${data.page.name} — Trachtengruppe Ins und Umgebung`
  );
  const canonical = $derived(`https://trachtengruppe-ins.ch${page.url.pathname}`);
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={data.page.meta.description} />
  <link href={canonical} rel="canonical" />

  {#if nofollow}
    <meta name="robots" content="noindex, nofollow" />
  {/if}
</svelte:head>

<BlockRenderer {blocks} />
