/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	extends: [
		'@unocss',
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier/skip-formatting'
	],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	rules: {
		'vue/multi-word-component-names': 'off',
		'arrow-parens': ['error', 'as-needed']
	}
}
