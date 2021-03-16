const setup = document.querySelector('.setup');
// const namesWizard = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
// const surnames = [ 'да Марья',  'Верон',  'Мирабелла',  'Вальц',  'Онопко',  'Топольницкая',  'Нионго',  'Ирвинг'];
// const coatColors = ['rgb(101, 137, 164)',  'rgb(241, 43, 107)',  'rgb(146, 100, 161)',  'rgb(56, 159, 117)',  'rgb(215, 210, 55)',  'rgb(0, 0, 0)', 'rgb(219,219,219)', 'rgb(219,0,0)', 'rgb(46,113,164)' ];
// const eyesColors = ['black',  'red',  'blue',  'yellow',  'green', 'coral', 'dark-pink', 'brown'];

// const getRandomItem = function(arr) {
//   const randomIndex = random_integer(1, arr.length - 1);
//   return arr[randomIndex];
// }

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

const setupWizardForm = document.querySelector('.setup-wizard-form');
setupWizardForm.setAttribute('action', 'https://21.javascript.pages.academy/code-and-magick');
setupWizardForm.action = 'https://21.javascript.pages.academy/code-and-magick';
//Если диалог открыт, нажатие на кнопку «Сохранить» приводит к отправке формы.
setupSubmit.addEventListener('click', function () {
  setupWizardForm.submit();
});
//Если диалог открыт и фокус находится на кнопке «Сохранить», нажатие на ENTER приводит к отправке формы.
document.addEventListener('keydown', function(evt){
  if (evt.code === "Enter" && setupSubmit.activeElement) {
    setupWizardForm.submit();
  }
});

//Когда иконка пользователя в фокусе .setup-open-icon, то окно настройки персонажа должно открываться по нажатию кнопки ENTER

const setupOpenIcon = document.querySelector('.setup-open-icon');
setupOpenIcon.setAttribute('tabindex', '0')
document.addEventListener('keydown', function(evt){
 if (evt.code === 'Enter' && setupOpenIcon.activeElement) {
  setup.classList.remove('hidden');
 }
});

// Когда окно настройки персонажа открыто, нажатие на клавишу ESC должно закрывать диалог.
document.addEventListener('keydown', function(evt) {
  if (evt.code === "Escape" /*&& !setupUserName.activeElement*/) {
    setup.classList.add("hidden");

  } else {

  }
});

//Если окно открыто и фокус находится на кнопке закрытия окна, то нажатие клавиши ENTER должно приводить к закрытию диалога.
setupClose.setAttribute('type', 'button');
setupClose.setAttribute('tabindex', '0');
document.addEventListener('keydown', function(evt) {
  if (evt.code === "Enter"/* && setupClose.focus()*/ ) {
    setup.classList.add("hidden");

  }
});




const setupFireballWrap = document.querySelector('.setup-fireball-wrap');
// const fireballColors = ['#ee4830', '#ee4830', '#30a8ee',  '#5ce6c0',  '#e848d5',  '#e6e848', '#E87B2D', '#741D0E', '#D3BABA'];
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
