<script lang="ts">
	import type { MAIN_NAVIGATION_OPTIONS } from '$lib/types/navigation'

	export let options: MAIN_NAVIGATION_OPTIONS[]
</script>

<nav
	class="wrapper-nav flex h-screen flex-col justify-start bg-secondary-50 min-h-[4.375rem] w-full py-3 relative left-0 right-0"
>
	<ul>
		{#each options as { path, title, icon, redirect }}
			<li
				class="outline-0 w-full min-h-[3rem] flex items-center border-solid px-4 border-[3px] border-transparent rounded-full cursor-pointer"
			>
				<span class={icon} />
				<a
					href={'/'}
					class="left-6 px-2 py-4 relative"
					on:click|preventDefault={() => redirect(path)}
				>
					<span>{title}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	.wrapper-nav {
		li {
			.icon {
				@apply text-xl absolute left-4;
			}

            a {
                span {
                    @apply sm:block hidden;
                }
            }

			&:hover {
				@apply bg-[length:100%] bg-gradient-to-r from-visuals-50 via-visuals-100 to-visuals-50 animate-brightglass;
				.icon {
					@apply text-2xl absolute left-3.5 transition-all;
				}
			}

			&:active {
				@apply bg-[length:100%] bg-gradient-to-r from-visuals-100 via-visuals-100 to-visuals-100 animate-confirmbrightglass text-additional-500 transition-colors;
                .icon {
					@apply text-xl absolute left-4 transition-all text-additional-400;
				}
            }
		}
	}
</style>
