"use strict";
let even_group_calculate_average = function (collection) {
  let array = [];
  let arr_1 = [];
  let arr_2 = [];
  let arr_3 = [];

  collection.forEach((value, index) => {
    if ((index + 1) % 2 === 0 && value % 2 === 0) {
      if (value / 10 < 1) {
        arr_1.push(value);
      } else if (value / 100 < 1) {
        arr_2.push(value);
      } else {
        arr_3.push(value);
      }
    }
  });
  if (!arr_3[0]) {
    array = [0];
  } else if (arr_2[0]) {
    avg(arr_1,array);
    avg(arr_2,array);
    avg(arr_3,array);
  } else {
    avg(arr_3,array);

  }
  return array;
};
function avg(arr,array) {
  let arr_avg = arr.reduce((pre, current, index) => {
    if (index === arr.length - 1) {
      return Math.round((pre + current) / arr.length);
    }
    return pre + current;
  });
  array.push(arr_avg);
}
module.exports = even_group_calculate_average;
