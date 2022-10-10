export function defineVariables(
	variables?: Record<string, string | undefined>
) {
	if (variables) {
		return Object.entries(variables)
			.filter(([, value]) => typeof value === 'string')
			.map(([variableName, value]) => `--${variableName}: ${value}`)
			.join('; ')
	}
	return ''
}
