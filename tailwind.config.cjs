module.exports = {
	// mode: 'jit',
	content: ['./src/**/*.scss', './src/**/*.svelte'],
	presets: [require('./src/lib/styles/presets/boo-light-preset.cjs')],
	theme: {
		extend: {
			keyframes: {
				pulseborder: {
				  '0%, 100%': {
					opacity: .9
				  },
				  '50%': {
					opacity: .5
				  },
				}
			  },
			animation: {
				'pulseborder': 'pulseborder 2s linear infinite',
			  }
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
