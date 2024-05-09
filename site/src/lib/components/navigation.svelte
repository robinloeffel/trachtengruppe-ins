<nav class="navigation" aria-label="Hauptnavigation">
	<ul class="navigation-list">
		<li class="navigation-item">
			<a class="navigation-link active" href="/">
				<img class="navigation-logo" alt="" src="/logo.svg" />
				<span>Home</span>
			</a>
		</li>
		<li class="navigation-item">
			<a class="navigation-link" href="/">Verein</a>
		</li>
		<li class="navigation-item">
			<a class="navigation-link" href="/">Agenda</a>
		</li>
		<li class="navigation-item">
			<a class="navigation-link" href="/">Galerie</a>
		</li>
		<li class="navigation-item">
			<a class="navigation-link" href="/">Kontakt</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	@use "$styles/colors";
	@use "$styles/scales";

	.navigation {
		position: sticky;
		inset: 0 0 auto;
		background-color: colors.$white-a90;
		background-blend-mode: soft-light;
		backdrop-filter: blur(scales.space("24"));
		border-bottom: scales.space("4") solid colors.$hint-of-chili;
	}

	.navigation-list {
		display: flex;
		gap: scales.space("24");
		align-items: center;
		width: min(100%, 1024px);
		padding: scales.space("24");
		margin: auto;
		list-style: none;
	}

	.navigation-item {
		display: inline-block;

		&:has(.navigation-logo) {
			margin-right: auto;
		}
	}

	.navigation-link {
		display: block;
		color: inherit;
		text-decoration: none;

		&:has(.navigation-logo) {
			display: grid;
			grid-template-columns: auto 1fr;
			gap: scales.space("8");
			align-items: center;
		}

		&.active {
			color: colors.$bloody-red;
		}

		&.active,
		&:hover,
		&:focus-visible {
			text-decoration: underline scales.space("2");
		}
	}

	.navigation-logo {
		width: 22px;
		height: 48px;
	}
</style>
