/* Nature Color Palette */
/* contrastSafe means it is safe to run white text 
   over this colour */
const coloursArray = [
  { name: "black", value: "#000000", contrastSafe: true },
  { name: "yellow1", value: "#efd600", contrastSafe: false },
  { name: "yellow2", value: "#ffd500", contrastSafe: false },
  { name: "yellow3", value: "#fbba00", contrastSafe: false },
  { name: "orange1", value: "#f7a70b", contrastSafe: false },
  { name: "orange2", value: "#eb5b25", contrastSafe: true },
  { name: "orange3", value: "#e63323", contrastSafe: true },
  { name: "red1", value: "#e40428", contrastSafe: true },
  { name: "red2", value: "#e5005b", contrastSafe: true },
  { name: "red3", value: "#c82285", contrastSafe: true },
  { name: "purple1", value: "#964091", contrastSafe: true },
  { name: "purple2", value: "#6c4796", contrastSafe: true },
  { name: "purple3", value: "#494495", contrastSafe: true },
  { name: "blue1", value: "#1951a0", contrastSafe: true },
  { name: "blue2", value: "#006eb7", contrastSafe: true },
  { name: "blue3", value: "#0085c8", contrastSafe: true },
  { name: "turquoise1", value: "#0095bb", contrastSafe: true },
  { name: "turquoise2", value: "#0094a4", contrastSafe: true },
  { name: "turquoise3", value: "#00928c", contrastSafe: true },
  { name: "seagreen1", value: "#008b68", contrastSafe: true },
  { name: "seagreen2", value: "#229863", contrastSafe: true },
  { name: "seagreen3", value: "#449b50", contrastSafe: true },
  { name: "leafgreen1", value: "#3fa535", contrastSafe: true },
  { name: "leafgreen2", value: "#76b82a", contrastSafe: false },
  { name: "leafgreen3", value: "#c7d530", contrastSafe: false },
  { name: "Communications Materials", value: "#5da9cd", contrastSafe: false },
  { name: "Communications Earth & Environment", value: "#cbd759", contrastSafe: false },
  { name: "Communications Chemistry", value: "#ee7d00", contrastSafe: false },
  { name: "Communications Biology", value: "#e20613", contrastSafe: true },
  { name: "Communications Physics", value: "#ffcb00", contrastSafe: false },
  { name: "Scientific Data", value: "#3598C2", contrastSafe: true },
  { name: "Scientific Reports", value: "#cedde4", contrastSafe: false },
];

const findColourName = name => coloursArray.find(elem => elem.name === name);

const journals = [
  {
    name: "Nature",
    colour: findColourName("black"),
    logo: "./images/Nature.png",
  },
  {
    name: "Nature Astronomy",
    colour: findColourName("blue3"),
    logo: "./images/Nature-Astronomy.png",
  },
  {
    name: "Nature Biomedical Engineering",
    colour: findColourName("purple1"),
    logo: "./images/Nature-Biomedical-Engineering.png",
  },
  {
    name: "Nature Biotechnology",
    colour: findColourName("yellow1"),
    logo: "./images/Nature-Biotechnology.png",
  },
  {
    name: "Nature Cancer",
    colour: findColourName("red1"),
    logo: "./images/Nature-Cancer.png",
  },
  {
    name: "Nature Catalysis",
    colour: findColourName("blue2"),
    logo: "./images/Nature-Catalysis.png",
  },
  {
    name: "Nature Cell Biology",
    colour: findColourName("blue3"),
    logo: "./images/Nature-Cell-Biology.png",
  },
  {
    name: "Nature Chemical Biology",
    colour: findColourName("turquoise2"),
    logo: "./images/Nature-Chemical-Biology.png",
  },
  {
    name: "Nature Chemistry",
    colour: findColourName("purple2"),
    logo: "./images/Nature-Chemistry.png",
  },
  {
    name: "Nature Climate Change",
    colour: findColourName("turquoise1"),
    logo: "./images/Nature-Climate-Change.png",
  },
  {
    name: "Communications Journals",
    colour: findColourName("orange3"),
    logo: "./images/Nature-Communications.png",
  },
  {
    name: "Communications Materials",
    colour: findColourName("Communications Materials"),
    logo: "./images/Nature-Communications-Materials.png",
  },
  {
    name: "Communications Earth & Environment",
    colour: findColourName("Communications Earth & Environment"),
    logo: "./images/Nature-Communications-Earth-&-Environment.png",
  },
  {
    name: "Communications Chemistry",
    colour: findColourName("Communications Chemistry"),
    logo: "./images/Nature-Communications-Chemistry.png",
  },
  {
    name: "Communications Biology",
    colour: findColourName("Communications Biology"),
    logo: "./images/Nature-Communications-Biology.png",
  },
  {
    name: "Communications Physics",
    colour: findColourName("Communications Physics"),
    logo: "./images/Nature-Communications-Physics.png",
  },
  {
    name: "Nature Ecology & Evolution",
    colour: findColourName("leafgreen3"),
    logo: "./images/Nature-Ecology-&-Evolution.png",
  },
  {
    name: "Nature Electronics",
    colour: findColourName("turquoise2"),
    logo: "./images/Nature-Electronics.png",
  },
  {
    name: "Nature Energy",
    colour: findColourName("orange2"),
    logo: "./images/Nature-Energy.png",
  },
  {
    name: "Nature Food",
    colour: findColourName("yellow3"),
    logo: "./images/Nature-Food.png",
  },
  {
    name: "Nature Genetics",
    colour: findColourName("seagreen1"),
    logo: "./images/Nature-Genetics.png",
  },
  {
    name: "Nature Geoscience",
    colour: findColourName("seagreen3"),
    logo: "./images/Nature-Geoscience.png",
  },
  {
    name: "Nature Human Behaviour",
    colour: findColourName("blue1"),
    logo: "./images/Nature-Human-Behaviour.png",
  },
  {
    name: "Nature Immunology",
    colour: findColourName("blue1"),
    logo: "./images/Nature-Immunology.png",
  },
  {
    name: "Nature Machine Intelligence",
    colour: findColourName("turquoise1"),
    logo: "./images/Nature-Machine-Intelligence.png",
  },
  {
    name: "Nature Materials",
    colour: findColourName("red1"),
    logo: "./images/Nature-Materials.png",
  },
  {
    name: "Nature Medicine",
    colour: findColourName("red1"),
    logo: "./images/Nature-Medicine.png",
  },
  {
    name: "Nature Metabolism",
    colour: findColourName("orange2"),
    logo: "./images/Nature-Metabolism.png",
  },
  {
    name: "Nature Methods",
    colour: findColourName("blue2"),
    logo: "./images/Nature-Methods.png",
  },
  {
    name: "Nature Microbiology",
    colour: findColourName("purple1"),
    logo: "./images/Nature-Microbiology.png",
  },
  {
    name: "Nature Nanotechnology",
    colour: findColourName("orange1"),
    logo: "./images/Nature-Nanotechnology.png",
  },
  {
    name: "Nature Neuroscience",
    colour: findColourName("turquoise3"),
    logo: "./images/Nature-Neuroscience.png",
  },
  {
    name: "Nature Photonics",
    colour: findColourName("blue2"),
    logo: "./images/Nature-Photonics.png",
  },
  {
    name: "Nature Physics",
    colour: findColourName("purple3"),
    logo: "./images/Nature-Physics.png",
  },
  {
    name: "Nature Plants",
    colour: findColourName("seagreen3"),
    logo: "./images/Nature-Plants.png",
  },
  {
    name: "Nature Protocols",
    colour: findColourName("purple3"),
    logo: "./images/Nature-Protocols.png",
  },
  {
    name: "Nature Reviews Endocrinology",
    colour: findColourName("blue3"),
    logo: "./images/Nature-Reviews-Endocrinology.png",
  },
  {
    name: "Nature Reviews Cardiology",
    colour: findColourName("purple2"),
    logo: "./images/Nature-Reviews-Cardiology.png",
  },
  {
    name: "Nature Reviews Earth and Environment",
    colour: findColourName("leafgreen1"),
    logo: "./images/Nature-Reviews-Earth-and-Environment.png",
  },
  {
    name: "Nature Reviews Nephrology",
    colour: findColourName("blue2"),
    logo: "./images/Nature-Reviews-Nephrology.png",
  },
  {
    name: "Nature Reviews Clinical Oncology",
    colour: findColourName("red3"),
    logo: "./images/Nature-Reviews-Clinical-Oncology.png",
  },
  {
    name: "Nature Reviews Rheumatology",
    colour: findColourName("orange3"),
    logo: "./images/Nature-Reviews-Rheumatology.png",
  },
  {
    name: "Nature Reviews Gastroenterology & Hepatology",
    colour: findColourName("orange3"),
    logo: "./images/Nature-Reviews-Gastroenterology-&-Hepatology.png",
  },
  {
    name: "Nature Reviews Neurology",
    colour: findColourName("purple1"),
    logo: "./images/Nature-Reviews-Neurology.png",
  },
  {
    name: "Nature Reviews Urology",
    colour: findColourName("turquoise3"),
    logo: "./images/Nature-Reviews-Urology.png",
  },
  {
    name: "Nature Reviews Microbiology",
    colour: findColourName("blue1"),
    logo: "./images/Nature-Reviews-Microbiology.png",
  },
  {
    name: "Nature Reviews Genetics",
    colour: findColourName("red1"),
    logo: "./images/Nature-Reviews-Genetics.png",
  },
  {
    name: "Nature Reviews Neuroscience",
    colour: findColourName("leafgreen1"),
    logo: "./images/Nature-Reviews-Neuroscience.png",
  },
  {
    name: "Nature Reviews Molecular Cell Biology",
    colour: findColourName("blue1"),
    logo: "./images/Nature-Reviews-Molecular-Cell-Biology.png",
  },
  {
    name: "Nature Reviews Cancer",
    colour: findColourName("turquoise1"),
    logo: "./images/Nature-Reviews-Cancer.png",
  },
  {
    name: "Nature Reviews Immunology",
    colour: findColourName("purple2"),
    logo: "./images/Nature-Reviews-Immunology.png",
  },
  {
    name: "Nature Reviews Drug Discovery",
    colour: findColourName("orange1"),
    logo: "./images/Nature-Reviews-Drug-Discovery.png",
  },
  {
    name: "Nature Reviews Disease Primers",
    colour: findColourName("leafgreen2"),
    logo: "./images/Nature-Reviews-Disease-Primers.png",
  },
  {
    name: "Nature Reviews Materials",
    colour: findColourName("blue3"),
    logo: "./images/Nature-Reviews-Materials.png",
  },
  {
    name: "Nature Reviews Chemistry",
    colour: findColourName("seagreen1"),
    logo: "./images/Nature-Reviews-Chemistry.png",
  },
  {
    name: "Nature Reviews Physics",
    colour: findColourName("blue2"),
    logo: "./images/Nature-Reviews-Physics.png",
  },
  {
    name: "Nature Structural & Molecular Biology",
    colour: findColourName("purple2"),
    logo: "./images/Nature-Structural-&-Molecular-Biology.png",
  },
  {
    name: "Nature Sustainability",
    colour: findColourName("orange3"),
    logo: "./images/Nature-Sustainability.png",
  },
  {
    name: "Nature Careers",
    colour: findColourName("black"),
    logo: "./images/Nature-Careers.png",
  },
  {
    name: "Nature Masterclasses",
    colour: findColourName("red1"),
    logo: "./images/Nature-Masterclasses.png",
  },
  {
    name: "Scientific Data",
    colour: findColourName("Scientific Data"),
    logo: "./images/Scientific-Data.png",
  },
  {
    name: "Scientific Reports",
    colour: findColourName("Scientific Reports"),
    logo: "./images/Scientific-Reports.png",
  },
];

module.exports = journals;
