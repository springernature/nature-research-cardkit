const path = require("path")

const config = {
	entry: () => new Promise(resolve => resolve(["./src/app.js"])),

	output: {
		filename: "app.js",
		path: path.resolve(__dirname, "./dist"),
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.svg$/,
				exclude: /(node_modules)/,
				loader: "svg-inline",
			},
		],
	},

	plugins: [],
}

module.exports = config
