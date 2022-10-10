import { onDestroy } from 'svelte'

export function createDebouncedFunction<T extends (...args: any) => void>(
	fn: T,
	time = 500
): T {
	let timeoutRef: ReturnType<typeof setTimeout> | undefined = undefined

	onDestroy(clear)

	function clear() {
		if (timeoutRef) clearTimeout(timeoutRef)
	}

	function call(...args: any) {
		clear()
		timeoutRef = setTimeout(() => fn(...args), time)
	}

	return call as T
}
