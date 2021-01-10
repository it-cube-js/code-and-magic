
const cloud_width = 420;
const cloud_height = 270;
const cloud_x = 100;
const cloud_y = 10;
const cloud_date = [110, 20, 420, 270];

window.renderStatistics = function(ctx, names, times){
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(cloud_date[0], cloud_date[1], cloud_date[2], cloud_date[3]);
  ctx.fillStyle = 'white';
  ctx.fillRect(cloud_x, cloud_y, cloud_width, cloud_height);
  ctx.font = "16px PT Mono";
  ctx.strokeText("Ура вы победили!", 120, 30);

};

