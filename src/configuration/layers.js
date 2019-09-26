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
		x: 0,
		y: 420,
		width: 1066,
		height: 180,
		fill: "#FFFFFF",
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
			'"Welcome to the NRG\nsocial media image generator,\nplease upload an image and\ncustomise the design."',
		fontSize: 46,
		fontFamily:
			'GlosaMath-Roman, Georgia, Times, "Times New Roman", serif',
		get lineHeight() {
			return this.fontSize * 1.2
		},
		textAnchor: "middle",
		smartQuotes: true,
		useAsFilename: true,
		draggable: true,
		fill: "#FFFFFF",
		editable: {
			text: true,
			textAnchor: true,
			fontSize: {
				min: 36,
				max: 72,
				step: 1,
			},
			fill: true,
		},
	},
	url: {
		name: "url",
		type: "text",
		text: "go.nature.com/XXX",
		fontSize: 26,
		fontFamily: "NewsGothicMTOT-Regular, Helvetica, sans-serif",
		fill: "#000000",
		editable: {
			text: true,
		},
	},
	creditSide: {
		name: "credit on side",
		type: "text",
		text: "Image credit:",
		fontSize: 18,
		fontFamily: "NewsGothicMTOT-Regular, Helvetica, sans-serif",
		transform: "rotate(90,0,0) translate(20,-30)",
		fill: "#FFFFFF",
		editable: {
			text: true,
			fill: true,
		},
	},
	journalLogo: {
		name: "Image",
		type: "image",
		x: 0,
		y: 0,
		width: 600,
		height: 180,
		src: "./images/Nature-Astronomy.png",
		opacity: 1,
	},
}
