<script lang="ts">
	import clsx from 'clsx'

	export let checked: boolean | undefined = undefined
	export let error: string | undefined = undefined
	export let name: string

	$: id = $$props.id || $$props.name
	$: className = `${$$props.class} hidden-input`
</script>

<div class="flex">
	<label class="switch-root">
		<input
			{...$$restProps}
			class={clsx({ error }, className)}
			{name}
			{id}
			bind:checked
			on:change
			type="checkbox"
		/>
		<span class="switch-base">
			<span class="thumb" />
		</span>
		<span class="track" />
	</label>
</div>

<style lang="scss">
	.switch-root {
		@apply relative z-0 inline-flex flex-shrink-0 cursor-pointer overflow-hidden align-middle text-base p-3 w-14 h-[2.35rem];
	}

	.switch-root {
		.hidden-input {
			@apply hidden;
		}

		.switch-base {
			@apply absolute top-0 left-0 m-0 inline-flex cursor-pointer select-none items-center justify-center rounded-full bg-transparent align-middle border-none text-white outline-0 p-2 hover:bg-black hover:bg-opacity-5;
			text-decoration: none;
			transition: left 0.15s, transform 0.15s;
		}
		.thumb {
			@apply bg-additional-50 w-5 h-5 rounded-full;
			box-shadow: 0 2px 1px -1px #0003, 0 1px 1px #00000024, 0 1px 3px #0000001f;
		}
		.track {
			@apply h-full w-full rounded-full bg-additional-300 bg-opacity-40;
		}

		input {
			&:checked + .switch-base {
				@apply text-primary-500;
				left: calc(100% - 2.375em);
				.thumb {
					@apply bg-primary-500 animate-pulsebackground;
				}
				&:hover {
					@apply bg-visuals-500 bg-opacity-5;
				}
			}
			&:checked + .switch-base + .track {
				@apply bg-additional-300;
			}
		}
	}
</style>
