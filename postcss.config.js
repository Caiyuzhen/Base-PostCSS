const postcssPresetEnv = require("postcss-preset-env");
const postcssImport = require('postcss-import');
const postcssMixin = require('postcss-mixins');

module.exports = {
	plugins: [
		require("stylelint"),
		require("autoprefixer"),
		postcssMixin(),

		postcssPresetEnv({
			stage: 0, /* 使用 stage 0 阶段的 css 新特性 */
		}),
		require("postcss-pxtorem")
	],
}