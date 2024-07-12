<script lang="ts">
	import { Grid, Icon } from "$components";
	import type { Result } from "$sanity";
	import { formatLongFullDate, formatShortFullDate } from "$utils";

	export let events: Result<"agenda", "events">;

	let filteredEvents = events;
	let activeFilter: "future" | "past" | null = null;

	const resetFilter = () => {
		filteredEvents = events;
		activeFilter = null;
	};

	const filterPastItems = () => {
		if (activeFilter === "past") {
			resetFilter();
		} else {
			filteredEvents = events.filter(item => new Date(item.date) < new Date());
			activeFilter = "past";
		}
	};

	const filterFutureItems = () => {
		if (activeFilter === "future") {
			resetFilter();
		} else {
			filteredEvents = events.filter(item => new Date(item.date) > new Date());
			activeFilter = "future";
		}
	};
</script>

<Grid tag="section">
	<div class="agenda">
		<ul class="agenda-filter">
			<li class="agenda-filter-item">
				<button
					class="agenda-filter-button"
					class:active={activeFilter === null}
					type="button"
					on:click={resetFilter}
				>Alle</button>
			</li>
			<li class="agenda-filter-item">
				<button
					class="agenda-filter-button"
					class:active={activeFilter === "past"}
					type="button"
					on:click={filterPastItems}
				>Vergangene</button>
			</li>
			<li class="agenda-filter-item">
				<button
					class="agenda-filter-button"
					class:active={activeFilter === "future"}
					type="button"
					on:click={filterFutureItems}
				>Zukünftige</button>
			</li>
		</ul>
		<ul class="agenda-list">
			{#each filteredEvents as item (item._key)}
				<li class="agenda-item" class:special={item.special}>
					<div class="agenda-item-left">
						{formatShortFullDate(item.date)}
					</div>
					<div class="agenda-item-right">
						<h2 class="agenda-item-title">{item.title}</h2>
						<span class="agenda-item-date">
							<Icon name="calendar" />
							<span>{formatLongFullDate(item.date)}</span>
						</span>
						<span class="agenda-item-place">
							<Icon name="pin" />
							<span>{item.place}</span>
						</span>
						{#if item.link}
							<span class="agenda-item-link">
								<Icon name="arrow-up-right" />
								<a href={item.link}>Mehr erfahren</a>
							</span>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	</div>
</Grid>

<style lang="scss">
	@use "$styles/scales";
	@use "$styles/colors";
	@use "$styles/breakpoints";

	.agenda {
		@extend %component-gap;

		grid-column: 1 / -1;

		@include breakpoints.above-sm {
			grid-column: 2 / -2;
		}
	}

	.agenda-filter {
		display: flex;
		flex-wrap: wrap;
		gap: scales.space("16");
		justify-content: center;
		margin-bottom: scales.space("48");
		list-style: none;
	}

	.agenda-filter-item {
		display: flex;
	}

	.agenda-filter-button {
		display: flex;
		column-gap: scales.space("4");
		align-items: center;
		padding: scales.space("16") scales.space("24");
		font-size: scales.font("18");
		font-weight: 600;
		color: colors.$almost-black;
		cursor: pointer;
		background-color: colors.$misty-rose;
		border: 0;
		border-radius: 100px;

		&.active {
			color: colors.$white;
			background-color: colors.$hint-of-chili;
		}
	}

	.agenda-list {
		display: grid;
		row-gap: scales.space("24");
		list-style: none;
	}

	.agenda-item {
		display: grid;
		border: scales.space("4") solid colors.$misty-rose;
		border-radius: scales.space("16");

		&.special {
			border-color: colors.$hint-of-chili;
		}

		@include breakpoints.above-sm {
			grid-template-columns: 1fr 3fr;
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
		gap: scales.space("16");
		padding: scales.space("24") scales.space("32");

		@include breakpoints.above-sm {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.agenda-item-title {
		font-size: scales.font("36");

		@include breakpoints.above-sm {
			grid-row: 2 / 3;
			grid-column: 1 / -1;
		}
	}

	.agenda-item-date {
		display: grid;
		grid-template-columns: auto 1fr;
		column-gap: scales.space("8");
		align-items: baseline;

		@include breakpoints.above-sm {
			grid-row: 1 / 2;
			grid-column: 1 / -1;
		}
	}

	.agenda-item-place {
		display: grid;
		grid-template-columns: auto 1fr;
		column-gap: scales.space("8");
		align-items: baseline;

		@include breakpoints.above-sm {
			grid-row: 3 / 4;
			grid-column: 1 / 3;

			.agenda-item:has(.agenda-item-link) & {
				grid-column: 1 / 2;
			}
		}
	}

	.agenda-item-link {
		display: grid;
		grid-template-columns: auto 1fr;
		column-gap: scales.space("8");
		align-items: baseline;

		a {
			color: colors.$bloody-red;
		}

		@include breakpoints.above-sm {
			grid-row: 3 / 4;
			grid-column: 2 / 3;
		}
	}
</style>
