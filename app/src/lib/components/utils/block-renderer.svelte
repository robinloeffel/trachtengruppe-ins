<script lang="ts">
  import type { PageBuilder } from "$cms/block";
  import Agenda from "$components/blocks/agenda.svelte";
  import Contacts from "$components/blocks/contacts.svelte";
  import Hero from "$components/blocks/hero.svelte";
  import ImageGallery from "$components/blocks/image-gallery.svelte";
  import PageTeaserList from "$components/blocks/page-teaser-list.svelte";
  import Richtext from "$components/blocks/richtext.svelte";

  interface Props {
    blocks: PageBuilder;
  }

  const { blocks }: Props = $props();
</script>

{#each blocks as block (block._key)}
  {#if block._type === "hero"}
    <Hero {...block} />
  {:else if block._type === "pageTeaserList"}
    <PageTeaserList {...block} />
  {:else if block._type === "agenda"}
    <Agenda {...block} />
  {:else if block._type === "contactList"}
    <Contacts {...block} />
  {:else if block._type === "imageGallery"}
    <ImageGallery {...block} />
  {:else if block._type === "richtext"}
    <Richtext {...block} />
  {/if}
{/each}
