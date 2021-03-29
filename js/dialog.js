import {setup} from "./setup.js"
const uploadMove = document.querySelector('.upload');
// const setupTitleMove = document.querySelector('.setup-title')

let mousedown = false;
uploadMove.addEventListener('mousedown', function(evt){
  mousedown = true;
  let formX = evt.clientX - evt.offsetX
  let formY = evt.clientY - evt.offsetY
  console.log('setupWizardForm ' + formX + " X " + formY )
  console.log('setup ' + setup.style.left + " X " + setup.style.top )

console.log(evt)
});



// setupTitleMove.addEventListener('mousedown', function(evt){
//   mousedown = true;

// console.log(evt)
// });

uploadMove.addEventListener('mousemove', function(evt){
if(mousedown){
  let clientX = evt.clientX;
  let clientY = evt.clientY;
  let offsetX = evt.offsetX;
  let offsetY = evt.offsetY;

  let formX = evt.clientX - evt.offsetX
  let formY = evt.clientY - evt.offsetY

  // uploadMove.moveBy(clientX , clientY);

}
});

uploadMove.addEventListener('mouseup', function(evt){
  mousedown = false;

});
