const fonts = require("./fonts")
const layers = require("./layers")

const configuration = {
	card: {
		width: 1066,
		height: 600,
	},
	fonts,
	layers,
}

const templates = require("./templates/main")
const themes = require("./themes/main")
const layouts = require("./layouts/main")

module.exports = {
	configuration,
	templates,
	themes,
	layouts,
}
