var fillColours = [
                    {name: 'News Red', hex: '#c50a26', dark: true},
                    {name: 'Black', hex: '#000000', dark: true},
                    {name: 'Dark Grey', hex: '#333333', dark: true},
                    {name: 'White', hex: '#ffffff', dark: false},
                    {name: 'Dark red', hex: '#8b0d16', dark: true},
                    {name: 'Light red', hex: '#ea5153', dark: true},
                    {name: 'Dark blue', hex: '#5a527e', dark: true},
                    {name: 'Light blue', hex: '#8695c5', dark: true},
                    {name: 'Turquoise', hex: '#75c6c5', dark: false},
                    {name: 'Dark green', hex: '#3a4f3a', dark: true},
                    {name: 'Mid green', hex: '#3f8688', dark: true},
                    {name: 'Light green', hex: '#8fc297', dark: false},
                    {name: 'Brown', hex: '#9d8672', dark: true},
                    {name: 'Light brown', hex: '#decab2', dark: false},
                    {name: 'Yellow', hex: '#fbbc33', dark: false},
                    {name: 'Light yellow', hex: '#ffdc88', dark: false}
                  ];

var themes = {};

fillColours.forEach( (object, index, array) => {
  
  themes[object.name] = {};

  themes[object.name].card = {};
  themes[object.name].card.fill = object.hex;

  themes[object.name].layers = {};
  themes[object.name].layers.headline = {};
  themes[object.name].layers.headline.fill = object.dark ? '#EEEEEE' : '#333333';

  themes[object.name].layers.circleLogo = {};
  themes[object.name].layers.circleLogo.fill = object.dark ? '#EEEEEE' : '#333333';

  themes[object.name].layers.natureLogo = {};
  themes[object.name].layers.natureLogo.fill = object.dark ? '#EEEEEE' : '#333333';

  themes[object.name].layers.url = {};
  themes[object.name].layers.url.fill = object.dark ? '#EEEEEE' : '#333333';

  themes[object.name].layers.credit = {};
  themes[object.name].layers.credit.fill = object.dark ? '#EEEEEE' : '#333333';

  themes[object.name].layers.creditSide = {};
  themes[object.name].layers.creditSide.fill = object.dark ? '#EEEEEE' : '#333333';
});

module.exports = themes;