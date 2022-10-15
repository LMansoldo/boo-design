<script lang="ts">
	import { clsx } from '$lib/utils'

	export let label: string | undefined = undefined
	export let id: string | undefined = undefined
	export let type: string = 'text'
	export let name: string | undefined = undefined
	export let value: string | undefined = undefined
	export let placeholder: string | undefined = undefined
	export let error = ''
    export let icon = ''
    
	function typeAction(node: any) {
		node.type = type
	}

	$: className = clsx('boo-textfield', { error }, $$props.class)
    $: iconClassName = clsx('absolute right-4 top-1/3 text-additional-400', icon, $$props.class)
</script>

<label for={id} class={className} class:disabled={$$props.disabled}>
	<span class="text-additional-400">{label}</span>
	<div class="flex flex-row relative">
		<input
			{id}
			{name}
			{placeholder}
			use:typeAction
			bind:value
			class="min-h-[3rem] w-full"
			on:click
			on:change
			on:select
			on:focus
		/>
        <span class={iconClassName}></span>
	</div>
	<span class="text-additional-400 text-xs animate:pulse">{error}</span>
</label>

<style lang="scss">
	.boo-textfield {
		@apply text-base;
		input {
			@apply px-3 bg-secondary-50 border-secondary-300 border-b-[2px] border-solid border-t-[0] border-x-[0] outline-none focus:animate-pulseborder;
		}

		&.error {
			span {
				@apply text-error-600;
			}
			input {
				@apply border-error-500 border-b-[2px] focus:min-h-[3rem] focus:animate-pulseerror;
			}
		}
	}
</style>
