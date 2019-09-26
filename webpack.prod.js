const path = require("path")
const merge = require("webpack-merge")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const common = require("./webpack.common")

const config = merge(common, {
	mode: "production",
	optimization: {
		// Use UglifyJsPlugin as the default TerserWebpackPlugin
		// causes problems with named variables expected by CardKit
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					// Keep the module name 'CardKit' unaltered
					mangle: {
						reserved: ["CardKit"],
					},
				},
			}),
		],
	},
})

module.exports = config
