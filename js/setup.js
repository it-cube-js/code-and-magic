const setup = document.querySelector('.setup').classList.remove("hidden");
const namesWizard = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const surnames = [ 'да Марья',  'Верон',  'Мирабелла',  'Вальц',  'Онопко',  'Топольницкая',  'Нионго',  'Ирвинг'];
const coatColors = ['rgb(101, 137, 164)',  'rgb(241, 43, 107)',  'rgb(146, 100, 161)',  'rgb(56, 159, 117)',  'rgb(215, 210, 55)',  'rgb(0, 0, 0)'];
const eyesColors = ['black',  'red',  'blue',  'yellow',  'green'];

const getRandomItem = function(arr) {
  const randomIndex = random_integer(1, arr.length - 1);
  return arr[randomIndex];
}

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
const setupSimilar = document.querySelector('.setup-similar').classList.remove("hidden");



const template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
const similarList = document.querySelector('.setup-similar-list');

const getWizardsForPlayer = function(generate) {

  for(let i = 0; i < generate.length; i++){
    const wizard = template.cloneNode(true);
    wizard.querySelector('.setup-similar-label').textContent = generate[i].name;
    wizard.querySelector('.wizard-coat').style.fill = generate[i].coatColor;
    wizard.querySelector('.wizard-eyes').style.fill = generate[i].eyesColor;
    similarList.appendChild(wizard);
  }

}
console.log(getWizardsForPlayer(generateWizards(4)));
