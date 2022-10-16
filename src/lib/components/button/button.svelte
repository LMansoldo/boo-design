<script lang="ts">
	import { clsx } from '$lib/utils'

	import { BUTTON_COLORS, BUTTON_VARIANTS } from '../../types/button'

	export let variant: BUTTON_VARIANTS = BUTTON_VARIANTS.TEXT
	export let small = false
	export let normal = false
	export let large = false
	export let full = false
	export let circle = false
	
	export let color: BUTTON_COLORS = BUTTON_COLORS.PRIMARY

	let button: HTMLButtonElement | HTMLAnchorElement

	export const getElement = () => button

	$: className = clsx('boo-button', variant, color, { small, normal, large, full, circle }, $$props.class)
</script>

{#if $$props.href}
	<a
		{...$$restProps}
		href={$$props.href}
		bind:this={button}
		class={className}
		class:disabled={$$props.disabled}
		on:click
	>
		<slot />
	</a>
{:else}
	<button
		{...$$restProps}
		bind:this={button}
		class={className}
		on:click
	>
		<slot />
	</button>
{/if}

<style lang="scss">

	.boo-button {
		@apply inline-flex justify-center border border-solid border-transparent items-center leading-none px-6 py-1.5 duration-300;
		line-height: 1rem;
		min-height: 2.5rem;
		border-width: 2px;

		&.small {
			@apply min-h-[2rem] min-w-[2rem] text-xs;
		}

		&.normal {
			@apply min-h-[3rem] min-w-[4rem] text-sm;
		}

		&.large {
			@apply min-h-[4rem] min-w-[6rem];
		}

		&.full {
			@apply w-full min-h-[4rem];
		}

		&.circle {
			@apply rounded-full p-0;
		}	

		&.disabled,
		&:disabled {
			@apply opacity-40 cursor-not-allowed;
		}

		&:hover {
			@apply border border-solid border-visuals-500 duration-300 animate-pulseborder;
			border-width: 2px;
		}

		&.primary {
			@apply text-additional-600 bg-secondary-50;
		}
	}
</style>
