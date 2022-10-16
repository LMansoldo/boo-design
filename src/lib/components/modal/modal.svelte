<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte'
	import { clickOutside } from '$lib/utils/click-outside'
	import { clsx } from '$lib/utils'

	const dispatch = createEventDispatcher()

	export let id: string | undefined = undefined
	export let isOpen = false
	export let close = undefined
	export let open = undefined
	export let dialog = false

	$: className = clsx('modal', { dialog }, $$props.class)

	onMount(() => {
		close = closeModal
		open = openModal
	})
	function openModal() {
		isOpen = true
		dispatch('open')
	}
	function closeModal() {
		isOpen = dialog || false
		dispatch('close')
	}
	function composeTestId(_id: string | undefined, element: string) {
		const arr = [element]
		if (_id) arr.push(_id)
		return arr.join('-')
	}
</script>

{#if isOpen}
	<div class="overlay" data-testid={composeTestId(id, 'modal-overlay')}>
		<div
			data-testid={composeTestId(id, 'modal-content')}
			class={className}
			use:clickOutside
			on:click-outside={closeModal}
		>
			<slot close={closeModal} />
		</div>
	</div>
{/if}

<style>
	.overlay {
		@apply fixed top-0 right-0 bottom-0 left-0 z-50 flex h-full w-full justify-center items-center bg-additional-900 bg-opacity-10;
	}
	.overlay .modal {
		@apply overflow-y-auto rounded-none border-[3px] border-solid p-8 border-secondary-300 bg-secondary-50;
		width: var(--modal-width, 100%);
		max-width: var(--modal-max-width, 350px);
		max-height: calc(100% - 10rem);

		&.dialog {
			@apply p-0;
		}
	}
</style>
