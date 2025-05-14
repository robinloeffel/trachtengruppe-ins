<script lang="ts">
  import type { Result } from "$cms";
  import { Grid, Icon } from "$components";

  interface Props {
    contacts: Result<"contactList", "contacts">;
  }

  const { contacts }: Props = $props();
</script>

<Grid tag="section">
  <ul class="contacts">
    {#each contacts as contact (contact._key)}
      <li class="contact">
        <h2 class="contact-title">{contact.name}</h2>
        <span class="contact-email">
          <Icon name="mail" />
          <a href="mailto:{contact.email}">Email</a>
        </span>
        {#if contact.phone}
          <span class="contact-phone">
            <Icon name="phone" />
            <a href="tel:{contact.phone}">Telefon</a>
          </span>
        {/if}
      </li>
    {/each}
  </ul>
</Grid>

<style lang="scss">
  @use "$styles/scales";
  @use "$styles/colors";
  @use "$styles/breakpoints";

  .contacts {
    @extend %component-gap;

    display: grid;
    grid-column: 1 / -1;
    gap: scales.space("24");
    place-items: start stretch;
    list-style: none;

    @include breakpoints.above-sm {
      grid-template-columns: 1fr 1fr;
      grid-column: 2 / -2;
    }

    @include breakpoints.above-md {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .contact {
    padding: scales.space("24") scales.space("32");
    border: scales.space("4") solid colors.$misty-rose;
    border-radius: scales.space("24");
  }

  .contact-title {
    margin-bottom: scales.space("8");
    font-size: scales.font("20");
  }

  .contact-email,
  .contact-phone {
    display: inline-flex;
    column-gap: scales.space("8");
    align-items: center;
    font-size: scales.font("16");
  }

  .contact-email {
    margin-right: scales.space("8");
  }

  a {
    color: colors.$fire-engine-red;
  }
</style>
