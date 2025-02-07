<script lang="ts">
  import "$styles/base.scss";
  import "$styles/utils.scss";

  import { dev } from "$app/environment";
  import { page } from "$app/state";
  import { Footer, Navigation } from "$components";
  import { urlFor } from "$cms";
  import type { LayoutProps } from "./$types";

  const { data, children }: LayoutProps = $props();

  const navigationItems = $derived(data.pages.map(record => ({
    _id: record._id,
    name: record.name,
    href: record.slug.current
  })));

  const footerMail = $derived(
    data.settings?.footerMail ?? "info@trachtengruppe-ins.ch"
  );

  const favicon = $derived(
    data.settings?.favicon
      ? urlFor(data.settings.favicon).auto("format").size(64, 64).url()
      : "/favicon.png"
  );
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <base href="/" />
  <link href={favicon} rel="icon" />
  <link href={`https://trachtengruppe-ins.ch${page.url.pathname}`} rel="canonical" />

  {#if !dev}
    <script
      async
      data-domains="trachtengruppe-ins.ch"
      data-website-id="7a19e2b9-ca47-4df6-b786-ac63f6170246"
      src="/stats/script.js"
    ></script>
  {/if}
</svelte:head>

<Navigation items={navigationItems} />

<main>
  {@render children()}
</main>

<Footer email={footerMail} items={navigationItems} />
