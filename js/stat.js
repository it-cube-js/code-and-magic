const cloud_width = 420;
const cloud_height = 270;
const cloud_x = 100;
const cloud_y = 10;
const cloud_gap = 10;

const text_size = 16;
const text_gap = 10;

const column_height = 150;
const column_width = 40;
const column_gap = 50;

window.renderStatistics = function(ctx, names, times) {
  render_cloud(ctx);
  render_vitory_text(ctx);
  render_column(ctx, names, times);

};

const render_cloud = function(ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(cloud_x + cloud_gap, cloud_y + cloud_gap, cloud_width, cloud_height);
  ctx.fillStyle = 'white';
  ctx.fillRect(cloud_x, cloud_y, cloud_width, cloud_height);
};

const render_vitory_text = function(ctx) {
  const text_x = cloud_x + 20;
  const text_y = cloud_y + 20 + text_size;
  ctx.font = "16px PT Mono";
  ctx.fillStyle = 'black';
  ctx.fillText("Ура вы победили!", text_x, text_y);
  ctx.font = "16px PT Mono";
  ctx.fillText("Список результатов:", text_x, text_y + text_gap * 2);
};

// function random_integer(min, max) {
//   let rand = min - 0.5 + Math.random() * (max - min + 1);
//   return Math.round(rand);
// }

const render_column = function(ctx, names, times) {
  const column_start_x = cloud_x;
  const column_start_y = cloud_y + cloud_height - 20;

  for (let i = 0; names.length > i ; i++){
    const text_x = column_start_x + column_gap * (i + 1) + column_width * i;
    const text_y = column_start_y;
    ctx.fillText(names[i], text_x, text_y);

      if (names[i] == 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsl(240, ' + random_integer(1, 100) + '%, 50%)';
      }

    column_number_height = column_height / get_max_value(times) * times[i];

    const rect_x = text_x;
    const rect_y = column_start_y - text_size - column_number_height;
    ctx.fillRect(rect_x, rect_y, column_width, column_number_height);

    ctx.fillStyle = 'black';
    const time_x = rect_x;
    const time_y = rect_y - text_size / 2;
    times[i] = Math.floor(times[i])
    ctx.fillText(times[i], time_x, time_y);
  };
}

//getMaxValue
// const get_max_value = function(value){
//   let max = value[0];
// for (let i = 0; i < value.length; i++) {

//   if (max < value[i]) {
//     max = value[i];
//   }
// }
// return max;
// }




