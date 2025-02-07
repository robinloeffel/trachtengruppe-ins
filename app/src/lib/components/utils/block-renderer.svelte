<script lang="ts">
  import type { PageBuilder } from "$cms";
  import { Agenda, Contacts, Hero, ImageGallery, PageTeaserList, Richtext } from "$components";

  interface Props {
    blocks: PageBuilder;
  }

  const { blocks }: Props = $props();
</script>

{#each blocks as block (block._key)}
  {#if block._type === "hero"}
    <Hero {...block} />
  {/if}

  {#if block._type === "pageTeaserList"}
    <PageTeaserList {...block} />
  {/if}

  {#if block._type === "agenda"}
    <Agenda {...block} />
  {/if}

  {#if block._type === "contactList"}
    <Contacts {...block} />
  {/if}

  {#if block._type === "imageGallery"}
    <ImageGallery {...block} />
  {/if}

  {#if block._type === "richtext"}
    <Richtext {...block} />
  {/if}
{/each}
