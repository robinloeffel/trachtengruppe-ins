<script lang="ts">
	import { Icon } from "$components";

	export let index = -1;
	export let itemsCount = 0;

	let dialog: HTMLDialogElement;
	let open = false;

	export const close = () => {
		document.body.classList.remove("no-scroll");
		dialog.close();
		open = false;
	};

	export const show = () => {
		document.body.classList.add("no-scroll");
		dialog.showModal();
		open = true;
	};

	const previous = () => {
		index = index === 0 ? itemsCount - 1 : index - 1;
	};

	const next = () => {
		index = index === itemsCount - 1 ? 0 : index + 1;
	};

	const handleWindowKeydown = ({ key }: KeyboardEvent) => {
		if (open) {
			if (key === "ArrowLeft") {
				previous();
			}

			if (key === "ArrowRight") {
				next();
			}
		}
	};
</script>

<svelte:window on:keydown={handleWindowKeydown} />

<!-- eslint-disable-next-line svelte/no-inline-styles -->
<dialog bind:this={dialog} style:--item={index} class="lightbox" title="Diashow">
	<button class="lightbox-button" type="button" on:click={close}>
		<Icon name="x-mark" size="medium" />
		<span class="sr-only">Diashow schliessen</span>
	</button>
	<ul class="lightbox-track">
		<slot></slot>
	</ul>
	<div class="lightbox-navigation">
		<button class="lightbox-button" type="button" on:click={previous}>
			<Icon name="arrow-left" size="medium" />
			<span class="sr-only">Zurück blättern</span>
		</button>
		<button class="lightbox-button" type="button" on:click={next}>
			<Icon name="arrow-right" size="medium" />
			<span class="sr-only">Weiter blättern</span>
		</button>
	</div>
</dialog>

<style lang="scss">
	@use "$styles/scales";
	@use "$styles/colors";
	@use "$styles/breakpoints";

	:global(::backdrop) {
		background: none;
		backdrop-filter: blur(scales.space("64")) brightness(0.2);
	}

	.lightbox {
		grid-template-rows: auto 1fr auto;
		place-items: center;
		width: 100%;
		max-width: none;
		height: 100%;
		max-height: none;
		overflow: hidden;
		background: none;
		border: 0;

		&[open] {
			display: grid;
		}
	}

	.lightbox-track {
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
		color: colors.$white;
		cursor: pointer;
		background: 0;
		border: 0;
	}

	.lightbox-navigation {
		display: flex;
	}
</style>
