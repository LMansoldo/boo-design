const preprocess = require('svelte-preprocess')
const { mergeConfig } = require('vite')
const path = require('path')

module.exports = {
	core: {
		builder: '@storybook/builder-vite',
	},
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx|svelte)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-svelte-csf',
		'storybook-addon-theme-changer',
		'storybook-addon-sass-postcss',
	],
	staticDirs: ['../static'],
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) =>
				prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
		},
	},
	framework: '@storybook/svelte',
	svelteOptions: {
		preprocess: preprocess({
			typescript: true,
			postcss: true,
			sourceMap: false,
			scss: {
				prependData: '@import "src/lib/styles/utils";',
			},
		}),
	},
	async viteFinal(config, { configType }) {
		// return the customized config
		return mergeConfig(config, {
			// customize the Vite config here
			resolve: {
				alias: {
					$lib: path.resolve(__dirname, '../src/lib'),
				},
			},
		})
	},
}
