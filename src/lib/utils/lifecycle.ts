import { onMount } from 'svelte'

export function createMountedCallback<T extends (...args: any) => void>(
	fn: T
): T {
	let mounted = false

	onMount(() => {
		mounted = true
		return () => (mounted = false)
	})

	const callback = (...args: any) => {
		if (mounted) fn(...args)
	}

	return callback as T
}
