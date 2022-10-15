const colors = require('tailwindcss/colors.js')

module.exports = {
	// mode: 'jit',
	content: ['./src/**/*.scss', './src/**/*.svelte'],
	presets: [require('./src/lib/styles/presets/boo-light-preset.cjs')],
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
