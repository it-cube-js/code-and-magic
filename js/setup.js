import {getRandomItem, random_integer} from "./util.js";
import {generateWizards} from "./data.js";
// import {coatColors} from "./data.js";
import {getData as getDataFromServer} from './server.js'
import {getRandomCoatColor, getRandomEyesColor, getRandomFireballColor} from './data.js'
const setup = document.querySelector('.setup');

// let dataServer

const onSuccess = function(data) {
  // dataServer = data
  let dataForDraw = []

  //отрендерить
  // createWizardElement(objServerTemplate)
  console.log('onSuccess', data);
  for(let i = 0; i < 4; i++) {
    dataForDraw.push(data[random_integer(0, data.length - 1)])
  }

  drawWizards(dataForDraw)
}

const onError = function(error) {
  console.log(error);

}

// const dataWizards = generateWizards(4);


const setupSimilar = document.querySelector('.setup-similar').classList.remove("hidden");

const template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
const similarList = document.querySelector('.setup-similar-list');

const createWizardElement = (obj) => {
  const wizard = template.cloneNode(true);
  wizard.querySelector('.setup-similar-label').textContent = obj.name;
  wizard.querySelector('.wizard-coat').style.fill = obj.colorCoat;
  wizard.querySelector('.wizard-eyes').style.fill = obj.colorEyes;

  return wizard;
}

const drawWizards = function(arr) {
  console.log('true')
  for(let i = 0; i < arr.length; i++){
    const element = createWizardElement(arr[i]);
    similarList.appendChild(element);
  }
};

const setupOpen = document.querySelector('.setup-open');
setupOpen.addEventListener('click', function () {
  getDataFromServer(onSuccess, onError);
  setup.classList.remove("hidden");
  similarList.innerHTML = '';
  // drawWizards(dataServer);

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
// console.log(setupWizardForm)

// setupWizardForm.action = 'https://21.javascript.pages.academy/code-and-magick';
// setupWizardForm.addEventListener('submit', function(evt) {
//   evt.preventDefault();
// })
//Если диалог открыт, нажатие на кнопку «Сохранить» приводит к отправке формы.
setupSubmit.addEventListener('click', function (evt) {
  evt.preventDefault();
  // setupWizardForm.submit();

  setup.classList.add('hidden');

});
//Если диалог открыт и фокус находится на кнопке «Сохранить», нажатие на ENTER приводит к отправке формы.
document.addEventListener('keydown', function(evt){
  if (evt.code === "Enter" && setupSubmit.activeElement) {
    setupWizardForm.submit();
    evt.preventDefault();

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
    wizardCoat.style.fill = getRandomCoatColor();
});

wizardEyes.addEventListener('click', function() {
  wizardEyes.style.fill = getRandomEyesColor();
});

setupFireballWrap.addEventListener('click', function() {
  setupFireballWrap.style.backgroundColor = getRandomFireballColor();
})


export {setup}
