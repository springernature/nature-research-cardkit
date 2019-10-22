const layouts = require("./layouts/main")

module.exports = {
	image: {
		name: "Image",
		type: "image",
		x: 0,
		y: 0,
		width: 1080,
		get height() {
			return this.width
		},
		src: "",
		preserveAspectRatio: "xMinYMin",
		draggable: true,
		opacity: 1,
		editable: {
			src: true,
			width: {
				min: 50,
				max: 2000,
				step: 10,
			},
			opacity: {
				min: 0,
				max: 1,
				step: 0.1,
			},
		},
	},
	bottomBar: {
		name: "Bottom Bar",
		type: "rectangle",
		fill: "#ffffff",
		opacity: 1,
		editable: {
			fill: true,
			opacity: {
				min: 0,
				max: 1,
				step: 0.1,
			},
		},
	},
	headline: {
		name: "Main text",
		type: "text",
		text:
			'"Welcome to the NRG\nsocial media image tool"',
		fontSize: 72,
		fontFamily:
			"HardingText-Regular-Web",
		get lineHeight() {
			return this.fontSize * 1.1
		},
		textAnchor: "left",
		smartQuotes: true,
		useAsFilename: true,
		draggable: false,
		letterSpacing: "-0.02em",
		fill: "#ffffff",
		editable: {
			text: true,
			fill: true,
			fontSize: {
				min: 50,
				max: 90,
				step: 1,
			},
		},
	},
	credit: {
		name: "credit on bottom",
		type: "text",
		text: "Image credit:",
		fontSize: 18,
		fontFamily: "HardingText-Regular-Web",
		textAnchor: "end",
		editable: {
			text: true,
		},
	},
	journalLogo: {
		name: "Image",
		type: "image",
		x: 0,
		y: 0,
		width: 600,
		height: 180,
		src: "./images/Nature.png",
		opacity: 1,
	},
}
