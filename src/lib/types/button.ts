export enum BUTTON_COLORS {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	ADDITIONAL = 'additional',
	FADED = 'faded',
	DANGER = 'danger',
}

export enum BUTTON_VARIANTS {
	RAISED = 'raised',
	TEXT = 'text',
	OUTLINED = 'outlined',
}

export enum BUTTON_SIZES {
	DEFAULT = 'default',
	SMALL = 'small',
	EXTRA_SMALL = 'extra-small',
	LARGE = 'large',
	EXTRA_LARGE = 'extra-large',
}

export interface BUTTON_TYPES {
	variant: BUTTON_VARIANTS
	chip: boolean
	thin: boolean
	color: BUTTON_COLORS
	label: string
}
