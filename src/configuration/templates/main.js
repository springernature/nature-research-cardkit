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
