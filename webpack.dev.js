const path = require("path")
const merge = require("webpack-merge")
const common = require("./webpack.common")

const config = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: path.join(__dirname, "./dist/"),
		port: 3000,
	},
})

module.exports = config
