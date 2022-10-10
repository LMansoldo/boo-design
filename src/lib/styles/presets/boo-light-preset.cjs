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
				visuals: colors.cyan
			},
		},
	},
}