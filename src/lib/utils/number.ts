export function asNumber(input: Date | number | string): number
export function asNumber(input: unknown): number | undefined
export function asNumber(input: unknown): number | undefined {
	if (input instanceof Date) return input.getTime()
	if (typeof input === 'number') return input
	if (typeof input === 'string') return Number(input)
}
