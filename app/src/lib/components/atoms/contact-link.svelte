<script lang="ts">
  interface Props {
    label: string;
    href: string;
  }

  const { label, href }: Props = $props();

  const onclick = (event: MouseEvent) => {
    event.preventDefault();
    globalThis.location.href = href;
  };
</script>

<a class="contact-link" aria-label={label} href="#!" {onclick}></a>

<style lang="scss">
  .contact-link::after {
    content: attr(aria-label);
  }
</style>
