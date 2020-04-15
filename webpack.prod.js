const path = require("path")
const merge = require("webpack-merge")
const common = require("./webpack.common")

const config = merge(common, {
	mode: "development",
})

module.exports = config
