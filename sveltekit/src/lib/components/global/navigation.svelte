<script context="module" lang="ts">
	interface NavigationItem {
		_id: string;
		name: string;
		href: string;
	}
</script>

<script lang="ts">
	import { page } from "$app/stores";
	import { Icon } from "$components";

	export let items: NavigationItem[];

	let slug: string;
	let isMobileMenuOpen = false;

	const logoItem = items.find(item => item.href === "/");
	const mainItems = items.filter(item => item.href !== "/" && !item.href.includes("/"));
	const subItems = items.filter(item => item.href !== "/" && item.href.includes("/"));

	$: ({ slug = "" } = $page.params);

	const toggleMobileMenu = () => {
		isMobileMenuOpen = !isMobileMenuOpen;
	};

	const closeMobileMenu = () => {
		isMobileMenuOpen = false;
	};
</script>

<nav
	class="navigation"
	class:is-mobile-open={isMobileMenuOpen}
	aria-label="Hauptnavigation"
>
	<div class="navigation-container">
		<div class="navigation-bar">
			<a
				class="navigation-link"
				class:active={slug === ""}
				href={logoItem?.href}
				on:click={closeMobileMenu}
			>
				<img class="navigation-logo" alt="" src="/logo.svg" />
				<span>{logoItem?.name}</span>
			</a>
			<button
				class="navigation-menu-toggle"
				type="button"
				on:click={toggleMobileMenu}
			>
				<Icon name="menu" size="medium" />
				<Icon name="x-mark" size="medium" />
				<span class="sr-only">
					{`Navigation ${isMobileMenuOpen ? "schliessen" : "öffnen"}`}
				</span>
			</button>
		</div>
		<div class="navigation-menu">
			<ul class="navigation-items">
				{#each mainItems as item (item._id)}
					<li class="navigation-item">
						<a
							class="navigation-link"
							class:active={slug.includes(item.href)}
							href={item.href}
							on:click={closeMobileMenu}
						>
							{item.name}
						</a>
						{#if subItems.find(subItem => subItem.href.includes(item.href))}
							<ul class="navigation-subitems">
								{#each subItems.filter(subItem => subItem.href.includes(item.href)) as subItem (subItem._id)}
									<li class="navigation-subitem">
										<a
											class="navigation-sublink"
											class:active={slug === subItem.href}
											href={subItem.href}
											on:click={closeMobileMenu}
										>{subItem.name}</a>
									</li>
								{/each}
							</ul>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>

<style lang="scss">
	@use "$styles/colors";
	@use "$styles/scales";
	@use "$styles/breakpoints";

	.navigation {
		position: fixed;
		inset: 0 0 auto;
		z-index: 9;
		background-color: colors.$white;
		border-bottom: scales.space("4") solid colors.$light-coral;
	}

	.navigation-container {
		width: min(100%, 1024px);
		padding: 0 scales.space("8");
		margin: 0 auto;

		@include breakpoints.above-sm {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}

	.navigation-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		list-style: none;

		@include breakpoints.above-sm {
			display: inline-flex;
		}
	}

	.navigation-logo {
		width: 22px;
		height: 48px;
	}

	.navigation-menu-toggle {
		display: grid;
		gap: scales.space("8");
		align-items: center;
		padding: scales.space("16");
		font: inherit;
		color: inherit;
		cursor: pointer;
		background: 0;
		border: 0;

		:global(.icon) {
			grid-area: 1 / 1 / 1 / 1;
			transition: scale 0.3s ease-in-out;
		}

		:global(.icon[data-name="x-mark"]) {
			scale: 0;
		}

		.is-mobile-open & {
			:global(.icon[data-name="menu"]) {
				scale: 0;
			}

			:global(.icon[data-name="x-mark"]) {
				scale: 1;
			}
		}

		@include breakpoints.above-sm {
			display: none;
		}
	}

	.navigation-menu {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.3s ease-in-out;
		will-change: grid-template-rows;

		.is-mobile-open & {
			grid-template-rows: 1fr;
		}
	}

	.navigation-items {
		overflow: hidden;
		list-style: none;

		@include breakpoints.above-sm {
			overflow: unset;
		}
	}

	.navigation-item {
		@include breakpoints.above-sm {
			display: inline-block;
		}

		&:has(.navigation-subitems) {
			position: relative;
		}
	}

	.navigation-link {
		display: inline-block;
		padding: scales.space("16");
		color: inherit;
		text-decoration: none;

		&:hover,
		&:focus-visible {
			text-decoration: underline scales.space("2");
		}

		&:has(.navigation-logo) {
			display: flex;
			gap: scales.space("8");
			align-items: center;
		}

		@include breakpoints.above-sm {
			padding: scales.space("24") scales.space("16");
		}
	}

	.navigation-subitems {
		padding: 0 scales.space("16");
		list-style: none;

		@include breakpoints.above-sm {
			position: absolute;
			inset: 100% auto auto 0;
			display: none;
			padding: scales.space("16");
			white-space: nowrap;
			background-color: colors.$white;
			border: scales.space("4") solid colors.$light-coral;

			.navigation-item:last-child & {
				inset: 100% 0 auto auto;
			}

			.navigation-item:hover > &,
			.navigation-item:focus-within > & {
				display: unset;
			}
		}
	}

	.navigation-subitem {
		margin-left: scales.space("8");

		@include breakpoints.above-sm {
			margin-left: 0;
		}
	}

	.navigation-sublink {
		display: inline-block;
		padding: scales.space("4");
		color: inherit;
		text-decoration: none;

		&:hover,
		&:focus-visible {
			text-decoration: underline scales.space("2");
		}

		@include breakpoints.above-sm {
			padding: scales.space("4") scales.space("16");
		}
	}

	.active {
		color: colors.$fire-engine-red;
		text-decoration: underline scales.space("2");
	}
</style>
