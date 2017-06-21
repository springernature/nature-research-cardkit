const journals = require('../journals');

const templates = {};

journals.forEach( (item) => {
	templates[item.name] = {
		card: {
			fill: item.colour
		},
		layers: {
			journalLogo: {
				src: item.logo
			},
			url: {
				fill: item.colour
			}
		}
	};
});

module.exports = templates;