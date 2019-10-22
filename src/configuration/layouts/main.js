const twitterCard = {
	width: 1066,
	height: 600,
	marginTop: 60,
	marginSide: 50,
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
			height: logo.height + twitterCard.marginTop + padding.top,
			x: -padding.side,
			y: twitterCard.height - logo.height - twitterCard.marginTop,
		},
		headline: {
			x: twitterCard.marginSide,
			y: twitterCard.marginTop + 10,
		},
		credit: {
			x: twitterCard.width - twitterCard.marginSide,
			y: twitterCard.height - twitterCard.marginTop - 18,
		},
		journalLogo: {
			x: twitterCard.marginSide,
			y: twitterCard.height - twitterCard.marginTop - logo.height,
		},
	},
}

module.exports = {
	twitter: twitterCreditLeft,
}
