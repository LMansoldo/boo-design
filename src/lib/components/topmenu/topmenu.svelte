<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	export let imgSource: string

	const dispatch = createEventDispatcher<Events>()
	type Events = {
		redirect: string
	}

	function redirectTo(url: string | undefined) {
		if (url) return dispatch('redirect', url)
	}
</script>

<header class="menubar">
	<img src={imgSource} alt={imgSource} on:click={() => redirectTo('/')} />
	<div class="flex justify-between w-full md:justify-end">
        <slot />
	</div>
</header>

<style lang="scss">
	.menubar {
		@apply flex flex-row items-center shadow-sm shadow-slate-700/50 justify-center md:justify-between bg-secondary-50 min-h-[4.375rem] drop-shadow-sm px-5 relative left-0 right-0;

		img {
			@apply w-12 h-auto align-middle cursor-pointer hidden md:block;
		}

		nav {
			@apply flex flex-row gap-2 self-stretch;

			.active {
				&:after {
					@apply content-[''] absolute bottom-0 h-1 w-full bg-additional-500 bg-opacity-100;
				}
			}
		}

		div {
			@apply flex flex-row items-center gap-1;
		}

		span {
			@apply relative inline-flex items-center justify-center self-stretch p-4 cursor-pointer transition duration-300 hover:text-primary-500;
		}
	}
</style>
