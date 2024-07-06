<script lang="ts">
	import { Grid, Icon } from "$components";
	import type { Result } from "$sanity";

	export let contacts: Result<"contactList", "contacts">;
</script>

<Grid>
	<ul class="contacts">
		{#each contacts as contact (contact._key)}
			<li class="contact">
				<h2 class="contact-title">{contact.name}</h2>
				<span class="contact-email">
					<Icon name="email" />
					<a href="mailto:{contact.email}">Email</a>
				</span>
				<span class="contact-phone">
					<Icon name="phone" />
					<a href="tel:{contact.phone}">Telefon</a>
				</span>
			</li>
		{/each}
	</ul>
</Grid>

<style lang="scss">
	@use "$styles/scales";
	@use "$styles/colors";
	@use "$styles/breakpoints";

	.contacts {
		display: grid;
		grid-column: 1 / -1;
		gap: scales.space("24");
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
		color: colors.$bloody-red;
	}
</style>
