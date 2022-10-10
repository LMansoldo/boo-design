export function entries<T extends object, K extends keyof T>(val: T) {
	if (typeof val === 'object' && val !== null)
		return Object.entries(val) as [K, T[K]][]
	return []
}

export function excludeEntriesIfNullUndefinedOrEmptyArray<T extends object>(
	obj: T
): T {
	const ret = { ...obj }
	entries(obj).forEach(([key, value]) => {
		if (
			value === undefined ||
			value === null ||
			(Array.isArray(value) && value.length === 0)
		) {
			delete ret[key]
		}
	})
	return ret
}

export function copyIfAnyChanges<T extends object>(obj: T, newValues: object) {
	const changes: object = {}
	entries(newValues).forEach(([key, value]) => {
		if (value !== obj[key]) changes[key] = value
	})
	if (Object.keys(changes).length > 0) return { ...obj, ...changes }
	return obj
}
