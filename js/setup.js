const setup = document.querySelector('.setup');
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
};
console.log(getWizardsForPlayer(generateWizards(4)));

const setupOpen = document.querySelector('.setup-open');
setupOpen.addEventListener('click', function () {
  setup.classList.remove("hidden");
});

const setupClose = document.querySelector('.setup-close');
setupClose.addEventListener('click', function () {
  setup.classList.add("hidden");
});

const setupUserName = document.querySelector('.setup-user-name');
const setupSubmit = document.querySelector('.setup-submit');
setupUserName.oninput = function (){
  const userName = setupUserName.value.length;
  if (userName <= 2 || userName >= 25) {
    setupSubmit.disabled = true;
  } else {
    setupSubmit.disabled = false;
  }

};
// if (evt.code === "Enter" && setupClose == setupClose.activeElement ) {
//   setup.classList.add("hidden");
// } else {
//   console.log('gfgf')
// }
document.addEventListener('keydown', function() {
  setupClose.addEventListener('focus', function(evt){
    if (evt.code === "Enter") {
        setup.classList.add("hidden");
      }
  })
});


// document.addEventListener('keydown', function(evt) {
//   // setup.classList.contains('.hidden') &&
//   if (evt.code === "Enter" && setupUserName !== setupUserName.activeElement ) {
//     setup.classList.add("hidden");

//   }
// });

const setupFireballWrap = document.querySelector('.setup-fireball-wrap');
const fireballColors = ['#ee4830',  '#30a8ee',  '#5ce6c0',  '#e848d5',  '#e6e848'];
const setupWizard = document.querySelector('.setup-wizard ');
const wizardEyes = setupWizard.querySelector('.wizard-eyes');
const wizardCoat = setupWizard.querySelector('.wizard-coat');

wizardCoat.addEventListener('click', function() {
    wizardCoat.style.fill = getRandomItem(coatColors)
});

wizardEyes.addEventListener('click', function() {
  wizardEyes.style.fill = getRandomItem(eyesColors)
});

setupFireballWrap.addEventListener('click', function() {
  setupFireballWrap.style.backgroundColor = getRandomItem(fireballColors);
})
