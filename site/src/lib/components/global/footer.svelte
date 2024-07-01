<script context="module" lang="ts">
	interface NavigationItem {
		title: string;
		href: string;
	}
</script>

<script lang="ts">
	export let items: NavigationItem[] = [];
	export let email: string;
</script>

<footer class="footer">
	<div class="footer-content">
		<nav class="footer-navigation" aria-label="Navigation in der Fusszeile">
			<ul class="footer-navigation-list">
				{#each items as item (item.title)}
					<li class="footer-navigation-item">
						<a href={item.href}>{item.title}</a>
					</li>
				{/each}
			</ul>
		</nav>
		<a href="mailto:${email}">{email}</a>
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
		flex-wrap: wrap;
		gap: scales.space("16");
		justify-content: space-around;
		width: min(100%, 1024px);
		padding: scales.space("24");
		margin: auto;
	}

	.footer-navigation-list {
		display: flex;
		flex-wrap: wrap;
		gap: scales.space("8") scales.space("24");
		justify-content: center;
		list-style: none;
	}

	.footer-navigation-item {
		display: inline-block;
	}
</style>
