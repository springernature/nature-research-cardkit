/* Nature Color Palette */
/* contrastSafe means it is safe to run white text 
   over this colour */
const natureColours = new Map();
natureColours.set("black", { value: "#000000", contrastSafe: true });
natureColours.set("yellow1", { value: "#efd600", contrastSafe: false });
natureColours.set("yellow2", { value: "#ffd500", contrastSafe: false });
natureColours.set("yellow3", { value: "#fbba00", contrastSafe: false });
natureColours.set("orange1", { value: "#f7a70b", contrastSafe: false });
natureColours.set("orange2", { value: "#eb5b25", contrastSafe: true });
natureColours.set("orange3", { value: "#e63323", contrastSafe: true });
natureColours.set("red1", { value: "#e40428", contrastSafe: true });
natureColours.set("red2", { value: "#e5005b", contrastSafe: true });
natureColours.set("red3", { value: "#c82285", contrastSafe: true });
natureColours.set("purple1", { value: "#964091", contrastSafe: true });
natureColours.set("purple2", { value: "#6c4796", contrastSafe: true });
natureColours.set("purple3", { value: "#494495", contrastSafe: true });
natureColours.set("blue1", { value: "#1951a0", contrastSafe: true });
natureColours.set("blue2", { value: "#006eb7", contrastSafe: true });
natureColours.set("blue3", { value: "#0085c8", contrastSafe: true });
natureColours.set("turquoise1", { value: "#0095bb", contrastSafe: true });
natureColours.set("turquoise2", { value: "#0094a4", contrastSafe: true });
natureColours.set("turquoise3", { value: "#00928c", contrastSafe: true });
natureColours.set("seagreen1", { value: "#008b68", contrastSafe: true });
natureColours.set("seagreen2", { value: "#229863", contrastSafe: true });
natureColours.set("seagreen3", { value: "#449b50", contrastSafe: true });
natureColours.set("leafgreen1", { value: "#3fa535", contrastSafe: true });
natureColours.set("leafgreen2", { value: "#76b82a", contrastSafe: false });
natureColours.set("leafgreen3", { value: "#c7d530", contrastSafe: false });
natureColours.set("Communications Materials", {
  value: "#5da9cd",
  contrastSafe: false,
});
natureColours.set("Communications Earth & Environment", {
  value: "#cbd759",
  contrastSafe: false,
});
natureColours.set("Communications Chemistry", {
  value: "#ee7d00",
  contrastSafe: false,
});
natureColours.set("Communications Biology", {
  value: "#e20613",
  contrastSafe: true,
});
natureColours.set("Communications Physics", {
  value: "#ffcb00",
  contrastSafe: false,
});
natureColours.set("Scientific Data", { value: "#3598C2", contrastSafe: true });
natureColours.set("Scientific Reports", {
  value: "#cedde4",
  contrastSafe: false,
});

const journals = [
  /* ---------------------------------- Black --------------------------------- */

  {
    name: "Nature",
    colour: natureColours.get("black"),
    logo: "./images/Nature.png",
    useHarding: true,
  },
  {
    name: "Communications Journals",
    colour: natureColours.get("black"),
    logo: "./images/Communications-Journals.png",
    useHarding: false,
  },
  {
    name: "Nature Careers",
    colour: natureColours.get("black"),
    logo: "./images/Nature-Careers.png",
    useHarding: true,
  },

  /* -------------------------------- Yellow 1 -------------------------------- */

  {
    name: "Nature Biotechnology",
    colour: natureColours.get("yellow1"),
    logo: "./images/Nature-Biotechnology.png",
    useHarding: true,
  },

  /* -------------------------------- Yellow 2 -------------------------------- */

  // None

  /* -------------------------------- Yellow 3 -------------------------------- */

  {
    name: "Nature Food",
    colour: natureColours.get("yellow3"),
    logo: "./images/Nature-Food.png",
    useHarding: true,
  },
  {
    name: "Nature Reviews Methods Primers",
    colour: natureColours.get("yellow3"),
    logo: "./images/Nature-Reviews-Methods-Primers.png",
    useHarding: true,
  },

  /* -------------------------------- Orange 1 -------------------------------- */

  {
    name: "Nature Nanotechnology",
    colour: natureColours.get("orange1"),
    logo: "./images/Nature-Nanotechnology.png",
    useHarding: true,
  },
  {
    name: "Nature Reviews Drug Discovery",
    colour: natureColours.get("orange1"),
    logo: "./images/Nature-Reviews-Drug-Discovery.png",
    useHarding: true,
  },
  // nature review psychology

  /* -------------------------------- Orange 2 -------------------------------- */

  {
    name: "Nature Energy",
    colour: natureColours.get("orange2"),
    logo: "./images/Nature-Energy.png",
    useHarding: true,
  },
  {
    name: "Nature Metabolism",
    colour: natureColours.get("orange2"),
    logo: "./images/Nature-Metabolism.png",
    useHarding: true,
  },
  {
    name: "Nature Methods",
    colour: natureColours.get("orange2"),
    logo: "./images/Nature-Methods.png",
    useHarding: true,
  },

  /* -------------------------------- Orange 3 -------------------------------- */

  {
    name: "Nature Communications",
    colour: natureColours.get("orange3"),
    logo: "./images/Nature-Communications.png",
    useHarding: false,
  },
  {
    name: "Nature Sustainability",
    colour: natureColours.get("orange3"),
    logo: "./images/Nature-Sustainability.png",
    useHarding: true,
  },
  {
    name: "Nature Reviews Gastroenterology & Hepatology",
    colour: natureColours.get("orange3"),
    logo: "./images/Nature-Reviews-Gastroenterology-&-Hepatology.png",
    useHarding: true,
  },
  {
    name: "Nature Reviews Rheumatology",
    colour: natureColours.get("orange3"),
    logo: "./images/Nature-Reviews-Rheumatology.png",
    useHarding: true,
  },

  /* ---------------------------------- Red 1 --------------------------------- */

  {
    name: "Nature Cancer",
    colour: natureColours.get("red1"),
    logo: "./images/Nature-Cancer.png",
    useHarding: true,
  },
  {
    name: "Nature Materials",
    colour: natureColours.get("red1"),
    logo: "./images/Nature-Materials.png",
    useHarding: true,
  },
  {
    name: "Nature Medicine",
    colour: natureColours.get("red1"),
    logo: "./images/Nature-Medicine.png",
    useHarding: true,
  },
  {
    name: "Nature Reviews Genetics",
    colour: natureColours.get("red1"),
    logo: "./images/Nature-Reviews-Genetics.png",
    useHarding: true,
  },
  {
    name: "Nature Masterclasses",
    colour: natureColours.get("red1"),
    logo: "./images/Nature-Masterclasses.png",
    useHarding: true,
  },

  /* ---------------------------------- Red 2 --------------------------------- */

  {
    name: "Nature Reviews Microbiology",
    colour: natureColours.get("red2"),
    logo: "./images/Nature-Reviews-Microbiology.png",
    useHarding: true,
  },

  /* ---------------------------------- Red 3 --------------------------------- */

  {
    name: "Nature Reviews Clinical Oncology",
    colour: natureColours.get("red3"),
    logo: "./images/Nature-Reviews-Clinical-Oncology.png",
    useHarding: true,
  },

  /* -------------------------------- Purple 1 -------------------------------- */

  {
    name: "Nature Biomedical Engineering",
    colour: natureColours.get("purple1"),
    logo: "./images/Nature-Biomedical-Engineering.png",
    useHarding: true,
  },
  {
    name: "Nature Microbiology",
    colour: natureColours.get("purple1"),
    logo: "./images/Nature-Microbiology.png",
    useHarding: true,
  },
  {
    name: "Nature Reviews Neurology",
    colour: natureColours.get("purple1"),
    logo: "./images/Nature-Reviews-Neurology.png",
    useHarding: true,
  },

  /* -------------------------------- Purple 2 -------------------------------- */

  {
    name: "Nature Chemistry",
    colour: natureColours.get("purple2"),
    logo: "./images/Nature-Chemistry.png",
    useHarding: true,
  },
  {
    name: "Nature Structural & Molecular Biology",
    colour: natureColours.get("purple2"),
    logo: "./images/Nature-Structural-&-Molecular-Biology.png",
    useHarding: true,
  },
  {
    name: "Nature Reviews Cardiology",
    colour: natureColours.get("purple2"),
    logo: "./images/Nature-Reviews-Cardiology.png",
    useHarding: true,
  },
  {
    name: "Nature Reviews Immunology",
    colour: natureColours.get("purple2"),
    logo: "./images/Nature-Reviews-Immunology.png",
    useHarding: true,
  },

  /* -------------------------------- Purple 3 -------------------------------- */

  {
    name: "Nature Physics",
    colour: natureColours.get("purple3"),
    logo: "./images/Nature-Physics.png",
    useHarding: true,
  },
  {
    name: "Nature Protocols",
    colour: natureColours.get("purple3"),
    logo: "./images/Nature-Protocols.png",
    useHarding: true,
  },
  {
    name: "Nature Computational Science",
    colour: natureColours.get("purple3"),
    logo: "./images/Nature-Computational-Science.png",
    useHarding: true,
  },

  /* --------------------------------- Blue 1 --------------------------------- */

  {
    name: "Nature Human Behaviour",
    colour: natureColours.get("blue1"),
    logo: "./images/Nature-Human-Behaviour.png",
    useHarding: true,
  },
  {
    name: "Nature Immunology",
    colour: natureColours.get("blue1"),
    logo: "./images/Nature-Immunology.png",
    useHarding: true,
  },
  {
    name: "Nature Reviews Molecular Cell Biology",
    colour: natureColours.get("blue1"),
    logo: "./images/Nature-Reviews-Molecular-Cell-Biology.png",
    useHarding: true,
  },

  /* --------------------------------- Blue 2 --------------------------------- */

  {
    name: "Nature Catalysis",
    colour: natureColours.get("blue2"),
    logo: "./images/Nature-Catalysis.png",
    useHarding: true,
  },
  {
    name: "Nature Photonics",
    colour: natureColours.get("blue2"),
    logo: "./images/Nature-Photonics.png",
    useHarding: true,
  },
  {
    name: "Nature Reviews Nephrology",
    colour: natureColours.get("blue2"),
    logo: "./images/Nature-Reviews-Nephrology.png",
    useHarding: true,
  },
  {
    name: "Nature Reviews Physics",
    colour: natureColours.get("blue2"),
    logo: "./images/Nature-Reviews-Physics.png",
    useHarding: true,
  },
  {
    name: "Nature Aging",
    colour: natureColours.get("blue2"),
    logo: "./images/Nature-Aging.png",
    useHarding: true,
  },

  /* --------------------------------- Blue 3 --------------------------------- */

  {
    name: "Nature Astronomy",
    colour: natureColours.get("blue3"),
    logo: "./images/Nature-Astronomy.png",
    useHarding: true,
  },
  {
    name: "Nature Cell Biology",
    colour: natureColours.get("blue3"),
    logo: "./images/Nature-Cell-Biology.png",
    useHarding: true,
  },
  {
    name: "Nature Reviews Endocrinology",
    colour: natureColours.get("blue3"),
    logo: "./images/Nature-Reviews-Endocrinology.png",
    useHarding: true,
  },
  {
    name: "Nature Reviews Materials",
    colour: natureColours.get("blue3"),
    logo: "./images/Nature-Reviews-Materials.png",
    useHarding: true,
  },

  /* ------------------------------- Turquoise 1 ------------------------------ */

  {
    name: "Nature Climate Change",
    colour: natureColours.get("turquoise1"),
    logo: "./images/Nature-Climate-Change.png",
    useHarding: true,
  },
  {
    name: "Nature Machine Intelligence",
    colour: natureColours.get("turquoise1"),
    logo: "./images/Nature-Machine-Intelligence.png",
    useHarding: true,
  },
  {
    name: "Nature Reviews Cancer",
    colour: natureColours.get("turquoise1"),
    logo: "./images/Nature-Reviews-Cancer.png",
    useHarding: true,
  },

  /* ------------------------------- Turquoise 2 ------------------------------ */

  {
    name: "Nature Chemical Biology",
    colour: natureColours.get("turquoise2"),
    logo: "./images/Nature-Chemical-Biology.png",
    useHarding: true,
  },
  {
    name: "Nature Electronics",
    colour: natureColours.get("turquoise2"),
    logo: "./images/Nature-Electronics.png",
    useHarding: true,
  },

  /* ------------------------------- Turquoise 3 ------------------------------ */

  {
    name: "Nature Neuroscience",
    colour: natureColours.get("turquoise3"),
    logo: "./images/Nature-Neuroscience.png",
    useHarding: true,
  },
  {
    name: "Nature Reviews Urology",
    colour: natureColours.get("turquoise3"),
    logo: "./images/Nature-Reviews-Urology.png",
    useHarding: true,
  },

  /* ------------------------------- Sea Green 1 ------------------------------ */

  {
    name: "Nature Genetics",
    colour: natureColours.get("seagreen1"),
    logo: "./images/Nature-Genetics.png",
    useHarding: true,
  },
  {
    name: "Nature Reviews Chemistry",
    colour: natureColours.get("seagreen1"),
    logo: "./images/Nature-Reviews-Chemistry.png",
    useHarding: true,
  },

  /* ------------------------------- Sea Green 2 ------------------------------ */

  // None

  /* ------------------------------- Sea Green 3 ------------------------------ */

  {
    name: "Nature Geoscience",
    colour: natureColours.get("seagreen3"),
    logo: "./images/Nature-Geoscience.png",
    useHarding: true,
  },
  {
    name: "Nature Plants",
    colour: natureColours.get("seagreen3"),
    logo: "./images/Nature-Plants.png",
    useHarding: true,
  },

  /* ------------------------------ Leaf Green 1 ------------------------------ */

  {
    name: "Nature Reviews Earth and Environment",
    colour: natureColours.get("leafgreen1"),
    logo: "./images/Nature-Reviews-Earth-and-Environment.png",
    useHarding: true,
  },
  {
    name: "Nature Reviews Neuroscience",
    colour: natureColours.get("leafgreen1"),
    logo: "./images/Nature-Reviews-Neuroscience.png",
    useHarding: true,
  },

  /* ------------------------------ Leaf Green 2 ------------------------------ */

  {
    name: "Nature Reviews Disease Primers",
    colour: natureColours.get("leafgreen2"),
    logo: "./images/Nature-Reviews-Disease-Primers.png",
    useHarding: true,
  },

  /* ------------------------------ Leaf Green 3 ------------------------------ */

  {
    name: "Nature Ecology & Evolution",
    colour: natureColours.get("leafgreen3"),
    logo: "./images/Nature-Ecology-&-Evolution.png",
    useHarding: true,
  },

  /* ----------------------------- Custom colours ----------------------------- */

  {
    name: "Communications Materials",
    colour: natureColours.get("Communications Materials"),
    logo: "./images/Communications-Materials.png",
    useHarding: false,
  },
  {
    name: "Communications Earth & Environment",
    colour: natureColours.get("Communications Earth & Environment"),
    logo: "./images/Communications-Earth-&-Environment.png",
    useHarding: false,
  },
  {
    name: "Communications Chemistry",
    colour: natureColours.get("Communications Chemistry"),
    logo: "./images/Communications-Chemistry.png",
    useHarding: false,
  },
  {
    name: "Communications Biology",
    colour: natureColours.get("Communications Biology"),
    logo: "./images/Communications-Biology.png",
    useHarding: false,
  },
  {
    name: "Communications Physics",
    colour: natureColours.get("Communications Physics"),
    logo: "./images/Communications-Physics.png",
    useHarding: false,
  },
  {
    name: "Scientific Data",
    colour: natureColours.get("Scientific Data"),
    logo: "./images/Scientific-Data.png",
    useHarding: false,
  },
  {
    name: "Scientific Reports",
    colour: natureColours.get("Scientific Reports"),
    logo: "./images/Scientific-Reports.png",
    useHarding: false,
  },
];

module.exports = journals;
