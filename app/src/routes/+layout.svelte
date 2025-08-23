<script lang="ts">
  import { dev } from "$app/environment";
  import { page } from "$app/state";
  import { urlFor } from "$cms";
  import { BackLink, Footer, Grid, Navigation } from "$components";
  import "$styles/base.scss";
  import "$styles/utils.scss";
  import type { LayoutProps } from "./$types";

  const { data, children }: LayoutProps = $props();

  const isSubPage = $derived(Boolean(page.params.slug));

  const navigationItems = $derived(data.pages.map(record => ({
    _id: record._id,
    name: record.name,
    href: record.slug.current
  })));

  const footerItems = $derived(
    navigationItems.filter(item => item.href === "/" || !item.href.includes("/"))
  );

  const footerMail = $derived(
    data.settings?.footerMail ?? "info@trachtengruppe-ins.ch"
  );

  const favicon = $derived(
    data.settings?.favicon
      ? urlFor(data.settings.favicon)
          .auto("format")
          .size(64, 64)
          .url()
      : "/favicon.avif"
  );

  const canonical = $derived(
    `https://trachtengruppe-ins.ch${page.url.pathname}`
  );
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <base href="/" />
  <link href={favicon} rel="icon" />
  <link href={canonical} rel="canonical" />

  {#if !dev}
    <script
      data-website-id="7a19e2b9-ca47-4df6-b786-ac63f6170246"
      defer
      fetchpriority="low"
      src="/stats/script.js"
    ></script>
  {/if}
</svelte:head>

<Navigation items={navigationItems} />

<main>
  {@render children()}

  {#if isSubPage}
    <Grid tag="section">
      <BackLink />
    </Grid>
  {/if}
</main>

<Footer email={footerMail} items={footerItems} />
