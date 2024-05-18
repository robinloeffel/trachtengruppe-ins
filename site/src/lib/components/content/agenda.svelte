<script lang="ts">
	import { Icon } from "$components";
	import type { SanityAgenda } from "$sanity";
	import { formatLongFullDate, formatShortFullDate } from "$utils";

	export let items: SanityAgenda;
</script>

<section class="agenda">
	<ul class="agenda-list">
		{#each items as item (item.title)}
			<li class="agenda-item" class:special={item.special}>
				<div class="agenda-item-left">
					{formatShortFullDate(item.date)}
				</div>
				<div class="agenda-item-right">
					<h2 class="agenda-item-title">{item.title}</h2>
					<span class="agenda-item-date">
						<Icon name="calendar" />
						{formatLongFullDate(item.date)}
					</span>
					<span class="agenda-item-place">
						<Icon name="map-pin" />
						{item.place}
					</span>
					{#if item.link}
						<span class="agenda-item-link">
							<Icon name="arrow-up-right" />
							<a
								href={item.link}
								rel="noopener noreferrer"
								target="_blank"
							>Mehr erfahren</a>
						</span>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	@use "$styles/scales";
	@use "$styles/colors";

	.agenda {
		grid-column: 2 / -2;
	}

	.agenda-list {
		display: grid;
		row-gap: scales.space("24");
		list-style: none;
	}

	.agenda-item {
		display: grid;
		grid-template-columns: 1fr 3fr;
		border: scales.space("4") solid colors.$misty-rose;
		border-radius: scales.space("16");

		&.special {
			border-color: colors.$hint-of-chili;
		}
	}

	.agenda-item-left {
		display: grid;
		place-items: center;
		padding: scales.space("24");
		font-size: scales.font("24");
		text-align: center;
		background-color: colors.$misty-rose;

		.special & {
			color: colors.$white;
			background-color: colors.$hint-of-chili;
		}
	}

	.agenda-item-right {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: scales.space("16");
		padding: scales.space("24") scales.space("32");
	}

	.agenda-item-title {
		grid-row: 2 / 3;
		grid-column: 1 / -1;
		font-size: scales.font("36");
	}

	.agenda-item-date {
		grid-row: 1 / 2;
		grid-column: 1 / -1;
	}

	.agenda-item-place {
		grid-row: 3 / 4;
		grid-column: 1 / 2;
	}

	.agenda-item-link {
		grid-row: 3 / 4;
		grid-column: 2 / 3;

		a {
			color: colors.$bloody-red;
		}
	}
</style>
