<script lang="ts">
  import { page } from "$app/state";
  import Grid from "$components/atoms/grid.svelte";
  import BackLink from "$components/global/back-link.svelte";
  import Footer from "$components/global/footer.svelte";
  import Navigation from "$components/global/navigation.svelte";
  import "$styles/base.scss";
  import "$styles/utils.scss";
  import type { LayoutProps } from "./$types";

  const { data, children }: LayoutProps = $props();

  const isSubPage = $derived(Boolean(page.params["slug"]));

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
</script>

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
