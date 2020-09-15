const journals = require("../journals")

const templates = {}

// Sorth the journals into alphabetical order
journals.sort((a, b) => {
	const nameA = a.name.toUpperCase()
	const nameB = b.name.toUpperCase()

	if (nameA < nameB) {
		return -1
	}

	if (nameA > nameB) {
		return 1
	}

	// names must be equal
	return 0
})

journals.forEach(item => {
	templates[item.name] = {
		card: {
			fill: item.colour.value,
		},
		layers: {
			journalLogo: {
				src: item.logo,
			},
			headline: {
				fontFamily: item.useHarding ? "HardingText-Regular-Web" : "GraphikNature-Regular-Web",
				letterSpacing: item.useHarding ? "-0.02em" : "-0.04em",
			}
		},
	}
})

module.exports = templates
