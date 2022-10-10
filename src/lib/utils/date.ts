export function addDays(date: Date | number | string, days: number): Date {
	if (date instanceof Date) {
		const result = new Date(date)
		result.setDate(date.getDate() + days)
		return result
	}
	return addDays(date, days)
}

export function asDate(date: Date | number | string): Date
export function asDate(
	date: Date | number | string | undefined | null
): Date | undefined
export function asDate(
	date: Date | number | string | undefined | null
): Date | undefined {
	if (date instanceof Date) return date
	else if (date !== null && date !== undefined) return new Date(date)
}
