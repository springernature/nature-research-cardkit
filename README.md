# nrg-cardkit

> Custom [cardkit](https://times.github.io/cardkit/) configuration for NRG social media accounts

CardKit documentation: https://times.github.io/cardkit/code/index.html

I'm using forked versions of CarkKit and RVG.js to allow extra SVG attributes, such as opacity: 
- https://github.com/chris-creditdesign/cardkit
- https://github.com/chris-creditdesign/rvg.js

Hosted online as a github page here: https://springernature.github.io/nrg-cardkit/

### TODO:

- Add `dy` attribute for text
- Add `rotation` attribute for text
- Add `transform` attribute for svg paths

### Installation & usage

- Clone this repo
- Install dependencies: `$ npm install`

- Run locally: `$ npm start`
- Build for distribution: `$ npm run dist`

### Development

All configuration can be found in `./src/configuration/main.js`. App logic can be found in `./src/app.js`.

### Deploy to GitHub pages 

	sh gh-page-deploy.sh dist