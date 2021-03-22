const getRandomItem = function(arr) {
  const randomIndex = random_integer(1, arr.length - 1);
  return arr[randomIndex];
}

const get_max_value = function(value){
  let max = value[0];
  for (let i = 0; i < value.length; i++) {

    if (max < value[i]) {
      max = value[i];
    }
  }
  return max;
}

function random_integer(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

export { getRandomItem, get_max_value, random_integer };
