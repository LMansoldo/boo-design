export type FieldValue =
	| string
	| string[]
	| boolean
	| number
	| File
	| File[]
	| PropertyMedia[]
	| UnitMedia[]
	| undefined
export type FormFieldError = string | string[] | Record<string, string>

export type Validator<T = string, E = string, Args extends Array = []> = (
	value: T | undefined | null,
	...args: Args
) => E | undefined

export interface Callbacks<R = void, E = unknown> {
	onResolve?: (result: R) => void
	onReject?: (error: E) => void
}

type ValueOf<T> = T[keyof T]
