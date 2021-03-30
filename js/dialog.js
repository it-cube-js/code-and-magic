import {setup} from "./setup.js"
const uploadMove = document.querySelector('.upload');
const setupTitleMove = document.querySelector('.setup-title')

// uploadMove.addEventListener('mousedown', function(evt){
//   mousedown = true;
//   let formX = evt.clientX - evt.offsetX
//   let formY = evt.clientY - evt.offsetY
//   console.log('setupWizardForm ' + formX + " X " + formY )
//   console.log('setup ' + setup.style.left + " X " + setup.style.top )

// console.log(evt)
// });




setupTitleMove.addEventListener('mousedown', function(evt) {
  window.setup = setup;
  const startX = evt.clientX;
  const startY = evt.clientY;
  const setupX = setup.offsetLeft;
  const setupY = setup.offsetTop;
  const onDocumentMouseMove = (evtMousemove) => {
    const shiftX = evtMousemove.clientX - startX;
    const shiftY = evtMousemove.clientY - startY;

    console.log('shift: ', shiftX, shiftY);
    // let stopX = evt.clientX;
    // let stopY = evt.clientY;

    // const dx = startX - stopX;
    // const dy = startY - stopY;

    console.log('setup ', setupX, setupY);

    setup.style.left = setupX + shiftX + 'px';
    setup.style.top = setupY + shiftY + 'px';

    // startX = stopX;
    // startY = stopY;
  };

  const onDocumentMouseup = () => {
    document.removeEventListener('mousemove', onDocumentMouseMove);
    document.removeEventListener('mouseup', onDocumentMouseup);
  }

  document.addEventListener('mousemove', onDocumentMouseMove);
  document.addEventListener('mouseup', onDocumentMouseup);
});

