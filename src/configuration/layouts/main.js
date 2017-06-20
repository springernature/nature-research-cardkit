var instagramCard = {
  width: 1080,
  height: 1080,
  marginTop: 30,
  marginSide: 30
};

var twitterCard = {
  width: 1066,
  height: 600,
  marginTop: 40,
  marginSide: 30
};

var natureLogo = {
  width: 180,
  height: 40
}

var circleLogo = {
  width: 90,
  height: 90
}

var twitterCreditRight = {
  card: twitterCard,
  layers: {
    headline: {
      x: twitterCard.width / 2,
      y: twitterCard.height * 0.3
    },
    url: {
      textAnchor: 'start',
      x: twitterCard.marginSide,
      y: twitterCard.height - twitterCard.marginTop - 20
    },
    credit: {
      textAnchor: 'end',
      x: twitterCard.width - twitterCard.marginSide,
      y: twitterCard.height - twitterCard.marginTop - 15
    },
    circleLogo: {
      transform: `translate(${twitterCard.width - twitterCard.marginSide - circleLogo.width}, ${twitterCard.marginTop})`
    },
    natureLogo: {
      transform: `translate(${twitterCard.width - twitterCard.marginSide - natureLogo.width}, ${twitterCard.height - twitterCard.marginTop - natureLogo.height })`
    }
  }
};

var twitterCreditLeft = {
  card: twitterCard,
  layers: {
    headline: {
      x: twitterCard.width / 2,
      y: twitterCard.height * 0.3
    },
    url: {
      textAnchor: 'end',
      x: twitterCard.width - twitterCard.marginSide,
      y: twitterCard.height - twitterCard.marginTop - 20
    },
    credit: {
      textAnchor: 'start',
      x: twitterCard.marginSide,
      y: twitterCard.height - twitterCard.marginTop - 15
    },
    circleLogo: {
      transform: `translate(${twitterCard.width - twitterCard.marginSide - circleLogo.width}, ${twitterCard.marginTop})`
    },
    natureLogo: {
      transform: `translate(${twitterCard.marginSide}, ${twitterCard.height - twitterCard.marginTop - natureLogo.height })`
    }
  }
};

var instagramCreditRight = {
  card: instagramCard,
  layers: {
    headline: {
      x: instagramCard.width / 2,
      y: instagramCard.height * 0.4
    },
    url: {
      textAnchor: 'start',
      x: instagramCard.marginSide,
      y: instagramCard.height - instagramCard.marginTop - 20
    },
    credit: {
      textAnchor: 'end',
      x: instagramCard.width - instagramCard.marginSide,
      y: instagramCard.height - instagramCard.marginTop - 15
    },
    circleLogo: {
      transform: `translate(${instagramCard.width - instagramCard.marginSide - circleLogo.width}, ${instagramCard.marginTop})`
    },
    natureLogo: {
      transform: `translate(${instagramCard.width - instagramCard.marginSide - natureLogo.width}, ${instagramCard.height - instagramCard.marginTop - natureLogo.height })`
    }
  }
};

var instagramCreditLeft = {
  card: instagramCard,
  layers: {
    headline: {
      x: instagramCard.width / 2,
      y: instagramCard.height * 0.4
    },
    url: {
      textAnchor: 'end',
      x: instagramCard.width - instagramCard.marginSide,
      y: instagramCard.height - instagramCard.marginTop - 20
    },
    credit: {
      textAnchor: 'start',
      x: instagramCard.marginSide,
      y: instagramCard.height - instagramCard.marginTop - 15
    },
    circleLogo: {
      transform: `translate(${twitterCard.width - twitterCard.marginSide - circleLogo.width}, ${instagramCard.marginTop})`
    },
    natureLogo: {
      transform: `translate(${instagramCard.marginSide}, ${instagramCard.height - instagramCard.marginTop - natureLogo.height })`
    }
  }
};
module.exports = {

  'twitter': twitterCreditLeft,
  'instagram': instagramCreditLeft,
  
}