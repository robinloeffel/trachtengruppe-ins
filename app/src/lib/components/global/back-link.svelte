<script lang="ts">
  import { page } from "$app/state";
  import { Icon } from "$components";

  const link = $derived(
    page.url.pathname
      .split("/")
      .toSpliced(-1, 1)
      .join("/") || "/"
  );
</script>

<a class="back-link" href={link}>
  <span><Icon name="arrow-left" /></span>
  <span>Zurück</span>
</a>

<style lang="scss">
  @use "$styles/scales";
  @use "$styles/colors";

  .back-link {
    grid-column: 1 / -1;
    place-self: center;
    margin-bottom: scales.space("32");
    color: colors.$fire-engine-red;
    text-decoration: none;

    span:last-child {
      text-decoration: underline;
    }
  }
</style>
