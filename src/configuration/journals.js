/* Nature Color Palette */
const colours = {
	black:		"#000000",
	yellow1: 	"#efd600",
	yellow2: 	"#ffd500",
	yellow3: 	"#fbba00",
	orange1: 	"#f7a70b",
	orange2: 	"#eb5b25",
	orange3: 	"#e63323",
	red1: 		"#e40428",
	red2: 		"#e5005b",
	red3: 		"#c82285",
	purple1: 	"#964091",
	purple2: 	"#6c4796",
	purple3: 	"#494495",
	blue1: 		"#1951a0",
	blue2: 		"#006eb7",
	blue3: 		"#0085c8",
	turquoise1: "#0095bb",
	turquoise2: "#0094a4",
	turquoise3: "#00928c",
	seagreen1: 	"#008b68",
	seagreen2: 	"#229863",
	seagreen3: 	"#449b50",
	leafgreen1: "#3fa535",
	leafgreen2: "#76b82a",
	leafgreen3: "#c7d530",
}

const coloursArray = Object.values(colours)

const journals = [
	{
		name: "Nature",
		colour: coloursArray[0],
		logo: "./images/Nature.png",
	},
	{
		name: "Nature Astronomy",
		colour: coloursArray[15],
		logo: "./images/Nature-Astronomy.png",
	},
	{
		name: "Nature Biomedical Engineering",
		colour: coloursArray[10],
		logo: "./images/Nature-Biomedical-Engineering.png",
	},
	{
		name: "Nature Biotechnology",
		colour: coloursArray[1],
		logo: "./images/Nature-Biotechnology.png",
	},
	{
		name: "Nature Catalysis",
		colour: coloursArray[14],
		logo: "./images/Nature-Catalysis.png",
	},
	{
		name: "Nature Cell Biology",
		colour: coloursArray[15],
		logo: "./images/Nature-Cell-Biology.png",
	},
	{
		name: "Nature Chemical Biology",
		colour: coloursArray[17],
		logo: "./images/Nature-Chemical-Biology.png",
	},
	{
		name: "Nature Chemistry",
		colour: coloursArray[11],
		logo: "./images/Nature-Chemistry.png",
	},
	{
		name: "Nature Climate Change",
		colour: coloursArray[16],
		logo: "./images/Nature-Climate-Change.png",
	},
	{
		name: "Nature Communications",
		colour: coloursArray[0],
		logo: "./images/Nature-Communications.png",
	},
	{
		name: "Nature Communications Chemistry",
		colour: coloursArray[0],
		logo: "./images/Nature-Communications-Chemistry.png",
	},
	{
		name: "Nature Communications Biology",
		colour: coloursArray[0],
		logo: "./images/Nature-Communications-Biology.png",
	},
	{
		name: "Nature Communications Physics",
		colour: coloursArray[0],
		logo: "./images/Nature-Communications-Physics.png",
	},
	{
		name: "Nature Ecology & Evolution",
		colour: coloursArray[24],
		logo: "./images/Nature-Ecology-&-Evolution.png",
	},
	{
		name: "Nature Electronics",
		colour: coloursArray[17],
		logo: "./images/Nature-Electronics.png",
	},
	{
		name: "Nature Energy",
		colour: coloursArray[5],
		logo: "./images/Nature-Energy.png",
	},
	{
		name: "Nature Food",
		colour: coloursArray[3],
		logo: "./images/Nature-Food.png",
	},
	{
		name: "Nature Genetics",
		colour: coloursArray[19],
		logo: "./images/Nature-Genetics.png",
	},
	{
		name: "Nature Geoscience",
		colour: coloursArray[21],
		logo: "./images/Nature-Geoscience.png",
	},
	{
		name: "Nature Human Behaviour",
		colour: coloursArray[13],
		logo: "./images/Nature-Human-Behaviour.png",
	},
	{
		name: "Nature Immunology",
		colour: coloursArray[13],
		logo: "./images/Nature-Immunology.png",
	},
	{
		name: "Nature Machine Intelligence",
		colour: coloursArray[16],
		logo: "./images/Nature-Machine-Intelligence.png",
	},
	{
		name: "Nature Materials",
		colour: coloursArray[7],
		logo: "./images/Nature-Materials.png",
	},
	{
		name: "Nature Medicine",
		colour: coloursArray[7],
		logo: "./images/Nature-Medicine.png",
	},
	{
		name: "Nature Metabolism",
		colour: coloursArray[5],
		logo: "./images/Nature-Metabolism.png",
	},
	{
		name: "Nature Methods",
		colour: coloursArray[9],
		logo: "./images/Nature-Methods.png",
	},
	{
		name: "Nature Microbiology",
		colour: coloursArray[10],
		logo: "./images/Nature-Microbiology.png",
	},
	{
		name: "Nature Nanotechnology",
		colour: coloursArray[4],
		logo: "./images/Nature-Nanotechnology.png",
	},
	{
		name: "Nature Neuroscience",
		colour: coloursArray[18],
		logo: "./images/Nature-Neuroscience.png",
	},
	{
		name: "Nature Photonics",
		colour: coloursArray[14],
		logo: "./images/Nature-Photonics.png",
	},
	{
		name: "Nature Physics",
		colour: coloursArray[12],
		logo: "./images/Nature-Physics.png",
	},
	{
		name: "Nature Plants",
		colour: coloursArray[21],
		logo: "./images/Nature-Plants.png",
	},
	{
		name: "Nature Protocols",
		colour: coloursArray[12],
		logo: "./images/Nature-Protocols.png",
	},
	{
		name: "Nature Reviews Endocrinology",
		colour: coloursArray[15],
		logo: "./images/Nature-Reviews-Endocrinology.png",
	},
	{
		name: "Nature Reviews Cardiology",
		colour: coloursArray[11],
		logo: "./images/Nature-Reviews-Cardiology.png",
	},
	{
		name: "Nature Reviews Nephrology",
		colour: coloursArray[14],
		logo: "./images/Nature-Reviews-Nephrology.png",
	},
	{
		name: "Nature Reviews Clinical Oncology",
		colour: coloursArray[9],
		logo: "./images/Nature-Reviews-Clinical-Oncology.png",
	},
	{
		name: "Nature Reviews Rheumatology",
		colour: coloursArray[6],
		logo: "./images/Nature-Reviews-Rheumatology.png",
	},
	{
		name: "Nature Reviews Gastroenterology & Hepatology",
		colour: coloursArray[6],
		logo:
			"./images/Nature-Reviews-Gastroenterology-&-Hepatology.png",
	},
	{
		name: "Nature Reviews Neurology",
		colour: coloursArray[10],
		logo: "./images/Nature-Reviews-Neurology.png",
	},
	{
		name: "Nature Reviews Urology",
		colour: coloursArray[18],
		logo: "./images/Nature-Reviews-Urology.png",
	},
	{
		name: "Nature Reviews Microbiology",
		colour: coloursArray[13],
		logo: "./images/Nature-Reviews-Microbiology.png",
	},
	{
		name: "Nature Reviews Genetics",
		colour: coloursArray[7],
		logo: "./images/Nature-Reviews-Genetics.png",
	},
	{
		name: "Nature Reviews Neuroscience",
		colour: coloursArray[22],
		logo: "./images/Nature-Reviews-Neuroscience.png",
	},
	{
		name: "Nature Reviews Molecular Cell Biology",
		colour: coloursArray[13],
		logo: "./images/Nature-Reviews-Molecular-Cell-Biology.png",
	},
	{
		name: "Nature Reviews Cancer",
		colour: coloursArray[16],
		logo: "./images/Nature-Reviews-Cancer.png",
	},
	{
		name: "Nature Reviews Immunology",
		colour: coloursArray[11],
		logo: "./images/Nature-Reviews-Immunology.png",
	},
	{
		name: "Nature Reviews Drug Discovery",
		colour: coloursArray[4],
		logo: "./images/Nature-Reviews-Drug-Discovery.png",
	},
	{
		name: "Nature Reviews Disease Primers",
		colour: coloursArray[23],
		logo: "./images/Nature-Reviews-Disease-Primers.png",
	},
	{
		name: "Nature Reviews Materials",
		colour: coloursArray[15],
		logo: "./images/Nature-Reviews-Materials.png",
	},
	{
		name: "Nature Reviews Chemistry",
		colour: coloursArray[19],
		logo: "./images/Nature-Reviews-Chemistry.png",
	},
	{
		name: "Nature Reviews Physics",
		colour: coloursArray[14],
		logo: "./images/Nature-Reviews-Physics.png",
	},
	{
		name: "Nature Structural & Molecular Biology",
		colour: coloursArray[11],
		logo: "./images/Nature-Structural-&-Molecular-Biology.png",
	},
	{
		name: "Nature Sustainability",
		colour: coloursArray[6],
		logo: "./images/Nature-Sustainability.png",
	},
	{
		name: "Nature Careers",
		colour: coloursArray[0],
		logo: "./images/Nature-Careers.png",
	},
	{
		name: "Scientific Data",
		colour: "#3598C2",
		logo: "./images/Scientific-Data.png",
	},
	{
		name: "Scientific Reports",
		colour: "#cedde4",
		logo: "./images/Scientific-Reports.png",
	},
]

module.exports = journals
