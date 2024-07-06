<script lang="ts">
	import { browser } from "$app/environment";
	import { Icon } from "$components";

	export let open = false;
	export let index = -1;
	export let itemsCount = 0;

	const close = () => {
		open = false;
	};

	const previous = () => {
		index = index === 0 ? itemsCount - 1 : index - 1;
	};

	const next = () => {
		index = index === itemsCount - 1 ? 0 : index + 1;
	};

	const handleWindowKeydown = ({ key }: KeyboardEvent) => {
		if (open) {
			if (key === "Escape") {
				close();
			}

			if (key === "ArrowLeft") {
				previous();
			}

			if (key === "ArrowRight") {
				next();
			}
		}
	};

	$: if (browser) {
		document.body.classList.toggle("no-scroll", open);
	}
</script>

<svelte:window on:keydown={handleWindowKeydown} />

<!-- eslint-disable-next-line svelte/no-inline-styles -->
<div style:--item={index} class="lightbox" class:open>
	<button class="lightbox-button" type="button" on:click={close}>
		<Icon name="x-mark" size="medium" />
	</button>
	<ul class="lightbox-content">
		<slot></slot>
	</ul>
	<div class="lightbox-navigation">
		<button class="lightbox-button" type="button" on:click={previous}>
			<Icon name="arrow-left" size="medium" />
		</button>
		<button class="lightbox-button" type="button" on:click={next}>
			<Icon name="arrow-right" size="medium" />
		</button>
	</div>
</div>

<style lang="scss">
	@use "$styles/scales";
	@use "$styles/colors";
	@use "$styles/breakpoints";

	.lightbox {
		position: fixed;
		inset: 0;
		z-index: 9;
		display: grid;
		grid-template-rows: auto 1fr auto;
		place-items: center;
		pointer-events: none;
		visibility: hidden;
		backdrop-filter: blur(scales.space("64"));
		opacity: 0;

		&.open {
			pointer-events: unset;
			visibility: unset;
			opacity: unset;
		}
	}

	.lightbox-content {
		display: grid;
		grid-auto-columns: 100%;
		grid-auto-flow: column;
		height: 100%;
		min-height: 0;
		list-style: none;
		translate: calc(var(--item) * -100%);

		:global(> *) {
			display: grid;
			place-items: center;
			min-height: 0;
			padding: scales.space("24");
		}
	}

	.lightbox-button {
		display: inline-grid;
		padding: scales.space("16");
		cursor: pointer;
		background: 0;
		border: 0;
	}

	.lightbox-navigation {
		display: flex;
	}
</style>
