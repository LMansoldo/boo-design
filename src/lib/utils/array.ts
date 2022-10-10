export function getFirst<T>(arr: T[] | undefined) {
	if (arr !== undefined) return arr[0]
}

export function asSingleOrEmpty<T>(value: T | undefined | null): T[] {
	if (value !== null && value !== undefined) return [value]
	return []
}
