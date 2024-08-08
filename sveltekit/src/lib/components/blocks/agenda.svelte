<script lang="ts">
	import { Grid, Icon } from "$components";
	import type { Result } from "$sanity";
	import { formatLongFullDate, formatShortFullDate } from "$utils";
	import { uniqWith } from "es-toolkit";

	interface EventType {
		label: string;
		value: string;
	}

	export let events: Result<"agenda", "events">;

	const uiEvents = events.map(event => ({
		...event,
		// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
		type: JSON.parse(event.type) as EventType
	}));

	const uniqueEventTypes = uniqWith(
		uiEvents.map(event => event.type),
		(a, b) => a.value === b.value
	);

	let activeFilter: string | null = null;

	const setFilter = ({ currentTarget }: MouseEvent) => {
		if (
			currentTarget instanceof HTMLButtonElement
			&& currentTarget.dataset.type
		) {
			activeFilter = activeFilter === currentTarget.dataset.type
				? null
				: currentTarget.dataset.type;
		}
	};
</script>

<Grid tag="section">
	<div class="agenda">
		<ul class="agenda-filter">
			{#each uniqueEventTypes as uniqueEventType (uniqueEventType.value)}
				<li class="agenda-filter-item">
					<button
						class="agenda-filter-button"
						class:active={uniqueEventType.value === activeFilter}
						data-type={uniqueEventType.value}
						type="button"
						on:click={setFilter}
					>{uniqueEventType.label}</button>
				</li>
			{/each}
		</ul>
		<ul class="agenda-list">
			{#each uiEvents as item (item._key)}
				<li
					class="agenda-item"
					class:hidden={activeFilter && item.type.value !== activeFilter}
					class:special={item.special}
				>
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
		color: colors.$charcoal;
		cursor: pointer;
		background: none;
		border: scales.space("4") solid colors.$misty-rose;
		border-radius: 100px;

		&:hover,
		&:focus-visible {
			background-color: colors.$misty-rose;
		}

		&.active {
			color: colors.$white;
			background-color: colors.$cinereous;
			border-color: colors.$cinereous;
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
			border-color: colors.$light-coral;
		}

		&.hidden {
			display: none;
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
			background-color: colors.$light-coral;
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
			color: colors.$fire-engine-red;
		}

		@include breakpoints.above-sm {
			grid-row: 3 / 4;
			grid-column: 2 / 3;
		}
	}
</style>
