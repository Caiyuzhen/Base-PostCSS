const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
	plugins: [
		require("stylelint"),
		require("autoprefixer"),
		postcssPresetEnv({
			stage: 0, /* 使用 stage 0 阶段的 css 新特性 */
		}),
		require("postcss-pxtorem")
	],
}