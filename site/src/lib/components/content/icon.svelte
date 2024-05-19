<script lang="ts">
	import ArrowLeft from "iconoir/icons/regular/arrow-left.svg?raw";
	import ArrowRight from "iconoir/icons/regular/arrow-right.svg?raw";
	import ArrowUpRight from "iconoir/icons/regular/arrow-up-right.svg?raw";
	import Calendar from "iconoir/icons/regular/calendar.svg?raw";
	import Mail from "iconoir/icons/regular/mail.svg?raw";
	import MapPin from "iconoir/icons/regular/map-pin.svg?raw";
	import Phone from "iconoir/icons/regular/phone.svg?raw";
	import XMark from "iconoir/icons/regular/xmark.svg?raw";

	const icons = {
		"arrow-left": ArrowLeft,
		"arrow-right": ArrowRight,
		"arrow-up-right": ArrowUpRight,
		"map-pin": MapPin,
		"x-mark": XMark,
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
			width: scales.space("48");
			height: scales.space("48");
		}

		:global(svg) {
			width: 100%;
			height: 100%;
		}
	}
</style>
