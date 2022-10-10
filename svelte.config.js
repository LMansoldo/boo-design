import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	package: {
		dir: process.env.OUTPUT_DIR ?? 'dist',
		emitTypes: true,
	},
	preprocess: preprocess({
		typescript: true,
		postcss: true,
		scss: {
			prependData: '@import "src/lib/styles/utils";',
		},
	}),
}

export default config
