const journals = require("../journals")

const templates = {}

journals.forEach(item => {
	templates[item.name] = {
		card: {
			fill: item.colour,
		},
		layers: {
			journalLogo: {
				src: item.logo,
			},
		},
	}
})

module.exports = templates
