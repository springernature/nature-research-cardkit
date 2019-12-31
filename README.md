# Nature Research CardKit

> Custom [cardkit](https://times.github.io/cardkit/) configuration for Nature Research social media accounts

CardKit documentation: https://times.github.io/cardkit/code/index.html

I'm using forked versions of CardKit and RVG.js to allow extra SVG attributes, such as opacity: 
- https://github.com/chris-creditdesign/cardkit
- https://github.com/chris-creditdesign/rvg.js

Hosted online as a github page here: https://springernature.github.io/nature-research-cardkit/

### Installation & usage

- Clone this repo
- Install dependencies: `$ npm install`

- Run locally: `$ npm run dev`
- Build for distribution: `$ npm run dist`

### Development

All configuration can be found in `./src/configuration/main.js`. App logic can be found in `./src/app.js`.

### Deploy to GitHub pages 

	sh gh-page-deploy.sh dist
