import type { SvelteComponent } from 'svelte'
import type { page } from '$app/stores'

declare module 'svelte' {
	export type Props = SvelteComponent['$$prop_def']
	export type Slots = SvelteComponent['$$slot_def']
}

export type SvelteActionReturnType<Args = unknown> = {
	update?: (args: Args) => void
	destroy?: () => void
} | void

export type Page = Parameters<Parameters<typeof page.subscribe>['0']>['0']
