const uploadMove = document.querySelector('.upload');


let mousedown = false;
uploadMove.addEventListener('mousedown', function(evt){
  mousedown = true;

console.log(evt)
});

uploadMove.addEventListener('mousemove', function(evt){
if(mousedown){
  let clientX = evt.clientX;
  let clientY = evt.clientY;
  let offsetX = evt.offsetX;
  let offsetY = evt.offsetY;

  uploadMove.moveBy(clientX , clientY);

}
console.log(evt)
});

uploadMove.addEventListener('mouseup', function(evt){
  mousedown = false;

});
