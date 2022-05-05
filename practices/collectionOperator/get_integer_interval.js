"use strict";

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  if (number_a === number_b) {
    return number_a;
  } else {
    if (number_a < number_b) {
      let arr = [];
      for (let i = number_a; i <= number_b; i + 1) {
        arr.push(i);
      }
    } else {
      let arr = [];
      for (let i = number_a; i >= number_b; i - 1) {
        arr.push(i);
      }
    }
  }
}

module.exports = get_integer_interval;
