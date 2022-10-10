import { entries } from './object'

const DEFAULT_LOCALE: Intl.LocalesArgument = 'en-US'

export const DEFAULT_CURRENCY_OPTIONS: Intl.NumberFormatOptions = {
	style: 'currency',
	currency: 'USD',
}

export function formatNumber(
	value: number | null | undefined,
	locale = DEFAULT_LOCALE,
	options: Intl.NumberFormatOptions | undefined
) {
	return typeof value === 'number' ? value.toLocaleString(locale, options) : ''
}

export function formatCurrency(
	value: number | null | undefined,
	locale = DEFAULT_LOCALE,
	options: Intl.NumberFormatOptions = {}
): string {
	return formatNumber(value, locale, {
		...DEFAULT_CURRENCY_OPTIONS,
		...options,
	})
}

export function formatDate(
	value: Date | number | string | undefined,
	locale = DEFAULT_LOCALE,
	options: Intl.DateTimeFormatOptions = {}
): string {
	switch (typeof value) {
		case 'string':
		case 'number':
			return formatDate(new Date(value), locale, options)
		case 'object':
			if (value instanceof Date)
				return value.toLocaleDateString(locale, {
					timeZone: 'utc',
					...options,
				})
			throw new Error(
				'format date error, provided an object but it is not instance of Date'
			)
		default:
			return ''
	}
}

export function formatText(
	text: string,
	args: unknown[] | Record<string, unknown>
): string {
	if (Array.isArray(args))
		return args.reduce(
			(acc, arg, index) => acc.replaceAll(`{${index}}`, String(arg)),
			text
		)
	else
		return entries(args).reduce(
			(acc, [key, value]) => acc.replaceAll(`{${key}}`, String(value)),
			text
		)
}
