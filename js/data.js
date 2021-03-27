import {getRandomItem} from './util.js'
const namesWizard = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const surnames = [ 'да Марья',  'Верон',  'Мирабелла',  'Вальц',  'Онопко',  'Топольницкая',  'Нионго',  'Ирвинг'];
const coatColors = ['rgb(101, 137, 164)',  'rgb(241, 43, 107)',  'rgb(146, 100, 161)',  'rgb(56, 159, 117)',  'rgb(215, 210, 55)',  'rgb(0, 0, 0)', 'rgb(219,219,219)', 'rgb(219,0,0)', 'rgb(211,167,167)', 'rgb(46,113,164)' ];
const eyesColors = ['black',  'red',  'blue',  'yellow',  'green', 'coral', 'dark-pink', 'brown'];
const fireballColors = ['#ee4830', '#ee4830', '#30a8ee',  '#5ce6c0',  '#e848d5',  '#e6e848', '#E87B2D', '#741D0E', '#D3BABA'];

const generateWizard = () => ({
  name: getRandomItem(namesWizard) + " " + getRandomItem(surnames),
  coatColor: getRandomItem(coatColors),
  eyesColor: getRandomItem(eyesColors)
});

const generateWizards = function(numb) {
  const arr = [];
  for(let i = 0; i < numb; i++) {
    arr.push(generateWizard())
  }
  return arr;
}

const getRandomCoatColor = () => {
  return getRandomItem(coatColors);
}
const getRandomEyesColor = () => {
  return getRandomItem(eyesColors);
}
const getRandomFireballColor = () => {
  return getRandomItem(fireballColors);
}

export {generateWizards, namesWizard, surnames, getRandomCoatColor, getRandomEyesColor, getRandomFireballColor};
