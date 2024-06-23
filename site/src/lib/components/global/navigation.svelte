<script context="module" lang="ts">
	interface NavigationItem {
		title: string;
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
	const regularItems = items.filter(item => item.href !== "/");

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
				<span>{logoItem?.title}</span>
			</a>
			<button
				class="navigation-menu-toggle"
				type="button"
				on:click={toggleMobileMenu}
			>
				<Icon name="menu" size="medium" />
				<Icon name="x-mark" size="medium" />
			</button>
		</div>
		<div class="navigation-menu">
			<ul class="navigation-items">
				{#each regularItems as item (item.href)}
					<li class="navigation-item">
						<a
							class="navigation-link"
							class:active={slug === item.href}
							href={item.href}
							on:click={closeMobileMenu}
						>
							{item.title}
						</a>
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
		background-color: colors.$white-a90;
		background-blend-mode: soft-light;
		backdrop-filter: blur(scales.space("24"));
		border-bottom: scales.space("4") solid colors.$hint-of-chili;
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

		@include breakpoints.above-sm {
			display: inline-flex;
			grid-template-rows: 1fr;
		}
	}

	.navigation-items {
		overflow: hidden;
		list-style: none;
	}

	.navigation-item {
		@include breakpoints.above-sm {
			display: inline-block;
		}
	}

	.navigation-link {
		display: inline-block;
		padding: scales.space("16");
		color: inherit;
		text-decoration: none;

		&.active,
		&:hover,
		&:focus-visible {
			text-decoration: underline scales.space("2");
		}

		&.active {
			color: colors.$bloody-red;
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
</style>
