const colors = require('tailwindcss/colors.js')

module.exports = {
	content: [
		'./node_modules/boo-design/**/*.scss',
		'./node_modules/boo-design/**/*.svelte',
	],
	theme: {
		borderWidth: {
			DEFAULT: '1px',
			1: '1px',
		},
		fontFamily: {
			'amplitude-regular': ['Amplitude Regular', 'sans-serif'],
			'amplitude-light': ['Amplitude Light', 'sans-serif'],
			'amplitude-medium': ['Amplitude Medium', 'sans-serif'],
			'amplitude-bold': ['Amplitude Bold', 'sans-serif'],
			'amplitude-wide-regular': ['Amplitude Wide Regular', 'sans-serif'],
			'amplitude-wide-light': ['Amplitude Wide Light', 'sans-serif'],
			inter: ['Inter', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: colors.blue,
				secondary: colors.slate,
				additional: colors.gray,
				background: colors.white,
				visuals: colors.cyan,
				error: colors.red,
			},
			keyframes: {
				pulseborder: {
					'0%, 100%': { 'border-color': colors.cyan[300] },
					'50%': { 'border-color': colors.blue[500] },
				},
				pulseerror: {
					'0%, 100%': { 'border-color': colors.red[300] },
					'50%': { 'border-color': colors.rose[600] },
				},
			},
			animation: {
				pulseborder: 'pulseborder 1.5s linear infinite',
				pulseerror: 'pulseerror 1.6s linear infinite'
			},
		},
	},
}
