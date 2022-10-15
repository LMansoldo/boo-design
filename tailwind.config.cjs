const colors = require('tailwindcss/colors.js')

module.exports = {
	// mode: 'jit',
	content: ['./src/**/*.scss', './src/**/*.svelte'],
	presets: [require('./src/lib/styles/presets/boo-light-preset.cjs')],
	theme: {
		extend: {
			keyframes: {
				pulseborder: {
					'0%, 100%': { 'border-color': colors.cyan[300] },
					'50%': { 'border-color': colors.blue[500] },
				},
			},
			animation: {
				pulseborder: 'pulseborder 1.5s linear infinite',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
