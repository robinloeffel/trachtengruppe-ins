<footer class="footer">
	<div class="footer-content">
		<a class="footer-mailto-link" href="mailto:info@trachtengruppe-ins.ch">info@trachtengruppe-ins.ch</a>
		<nav class="footer-navigation" aria-label="Navigation in der Fusszeile">
			<ul class="footer-navigation-list">
				<li class="footer-navigation-item">
					<a class="footer-navigation-link" href="/">Home</a>
				</li>
				<li class="footer-navigation-item">
					<a class="footer-navigation-link" href="/">Verein</a>
				</li>
				<li class="footer-navigation-item">
					<a class="footer-navigation-link" href="/">Agenda</a>
				</li>
				<li class="footer-navigation-item">
					<a class="footer-navigation-link" href="/">Galerie</a>
				</li>
				<li class="footer-navigation-item">
					<a class="footer-navigation-link" href="/">Kontakt</a>
				</li>
			</ul>
		</nav>
	</div>
</footer>

<style lang="scss">
	@use "$styles/colors";
	@use "$styles/scales";

	a {
		color: inherit;
		text-decoration: none;

		&:hover,
		&:focus-visible {
			text-decoration: underline scales.space("2");
		}
	}

	.footer {
		font-size: scales.font("18");
		border-top: scales.space("4") solid colors.$hint-of-chili;
	}

	.footer-content {
		display: flex;
		align-items: center;
		width: min(100%, 1024px);
		padding: scales.space("24");
		margin: auto;
	}

	.footer-navigation {
		margin-left: auto;
	}

	.footer-navigation-list {
		display: flex;
		gap: scales.space("24");
		list-style: none;
	}

	.footer-navigation-item {
		display: inline-block;
	}
</style>
