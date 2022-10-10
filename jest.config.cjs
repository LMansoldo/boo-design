const { pathsToModuleNameMapper } = require('ts-jest')
const tsconfig = require('./tsconfig.json')
const sveltekitTsConfig = require('./.svelte-kit/tsconfig.json')

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.svelte$': [
			'svelte-jester',
			{
				preprocess: true,
			},
		],
		'^.+\\.ts$': 'ts-jest',
		'^.+\\.js$': 'babel-jest',
	},

	moduleFileExtensions: ['js', 'ts', 'svelte'],
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	testMatch: ['**/?(*.)(spec|test).ts'],
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.spec.json',
		},
	},
	moduleNameMapper: {
		'^\\$app(.*)$': '<rootDir>/src/mocks/app$1',
		...pathsToModuleNameMapper(
			{
				...(tsconfig?.compilerOptions?.paths ?? {}),
				...(sveltekitTsConfig?.compilerOptions?.paths ?? {}),
			},
			{ prefix: '<rootDir>/' }
		),
	},
}
