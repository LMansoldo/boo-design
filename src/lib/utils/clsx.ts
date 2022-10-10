export type Input = string | Record<string, unknown> | null | undefined

export function clsx(...inputs: Input[]): string {
	return inputs
		.map((input) => {
			if (typeof input === 'object')
				return Object.entries(input)
					.filter(([, test]) => test)
					.map(([clazz]) => clazz)
					.join(' ')
			return input
		})
		.filter((input) => typeof input === 'string')
		.join(' ')
}
