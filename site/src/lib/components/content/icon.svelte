<script lang="ts">
	import ArrowUpRight from "iconoir/icons/regular/arrow-up-right.svg?raw";
	import Calendar from "iconoir/icons/regular/calendar.svg?raw";
	import Mail from "iconoir/icons/regular/mail.svg?raw";
	import MapPin from "iconoir/icons/regular/map-pin.svg?raw";
	import Phone from "iconoir/icons/regular/phone.svg?raw";

	const icons = {
		"arrow-up-right": ArrowUpRight,
		"map-pin": MapPin,
		calendar: Calendar,
		mail: Mail,
		phone: Phone
	};

	export let name: keyof typeof icons;
	export let size: "small" | "medium" | "large" = "small";

	const content = icons[name];
</script>

<i class="icon {size}">
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html content}
</i>

<style lang="scss">
	@use "$styles/scales";

	.icon {
		display: inline-grid;
		place-content: center;

		&.small {
			width: scales.space("16");
			height: scales.space("16");
		}

		&.medium {
			width: scales.space("24");
			height: scales.space("24");
		}

		&.large {
			width: scales.space("32");
			height: scales.space("32");
		}

		:global(svg) {
			width: 100%;
			height: 100%;
		}
	}
</style>
