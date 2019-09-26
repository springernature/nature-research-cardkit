const instagramCard = {
	width: 1080,
	height: 1080,
	marginTop: 30,
	marginSide: 30,
}

const twitterCard = {
	width: 1066,
	height: 600,
	marginTop: 40,
	marginSide: 30,
}

const logo = {
	width: 600,
	height: 180,
}

const padding = {
	top: 10,
	side: 30,
}

const twitterCreditLeft = {
	card: twitterCard,
	layers: {
		bottomBar: {
			width: twitterCard.width + 2 * padding.side,
			height: logo.height + 2 * padding.top,
			x: -padding.side,
			y: twitterCard.height - logo.height - padding.top,
		},
		headline: {
			x: twitterCard.width / 2,
			y: twitterCard.height * 0.175,
		},
		url: {
			textAnchor: "end",
			x: twitterCard.width - twitterCard.marginSide,
			y: twitterCard.height - twitterCard.marginTop - 20,
		},
		credit: {
			textAnchor: "start",
			x: twitterCard.marginSide,
			y: twitterCard.height - twitterCard.marginTop - 15,
		},
		journalLogo: {
			x: padding.side,
			y: twitterCard.height - logo.height,
		},
	},
}

const instagramCreditLeft = {
	card: instagramCard,
	layers: {
		bottomBar: {
			width: instagramCard.width + 2 * padding.side,
			height: logo.height + 2 * padding.top,
			x: -padding.side,
			y: instagramCard.height - logo.height - padding.top,
		},
		headline: {
			x: instagramCard.width / 2,
			y: instagramCard.height * 0.3,
		},
		url: {
			textAnchor: "end",
			x: instagramCard.width - instagramCard.marginSide,
			y: instagramCard.height - instagramCard.marginTop - 20,
		},
		credit: {
			textAnchor: "start",
			x: instagramCard.marginSide,
			y: instagramCard.height - instagramCard.marginTop - 15,
		},
		journalLogo: {
			x: padding.side,
			y: instagramCard.height - logo.height,
		},
	},
}
module.exports = {
	twitter: twitterCreditLeft,
	instagram: instagramCreditLeft,
}
