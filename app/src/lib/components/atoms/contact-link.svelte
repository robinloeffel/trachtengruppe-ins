<script lang="ts">
  interface Props {
    label: string;
    href: string;
  }

  const { label, href }: Props = $props();
</script>

<a class="contact-link" aria-label={label} {href}></a>

<style lang="scss">
  .contact-link::after {
    content: attr(aria-label);
  }
</style>
