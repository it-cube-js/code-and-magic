
const names = [];
const times = [];
const cloud_width = 420;
const cloud_height = 270;
const cloud_x = 100;
const cloud_y = 10;
// const cloud_date = [420, 270, 100, 10];
const canvas = document.getElementById('bar_chart');
const ctx = canvas.getContext('2d');
const renderStatistics = function(ctx, names, times){
  ctx.fillRect(cloud_x, cloud_y, cloud_width, cloud_height);
  ctx.fillStyle = "white";

};

/* let renderStatistics = function(window){

};

*/
