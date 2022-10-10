export type FelteErrors<Data extends object | object[]> = {
	[key in keyof Data]?: Data[key] extends object
		? FelteErrors<Data[key]>
		: Data[key] extends object[]
		? FelteErrors<Data[key]>[]
		: string | string[] | null
}
