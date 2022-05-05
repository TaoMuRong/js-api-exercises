"use strict";

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  if (number_a === number_b) {
    if (number_a % 2 === 0) {
      return number_a;
    } else {
      return [];
    }
  } else {
    if (number_a < number_b) {
      let arr = [];
      if (number_a % 2 === 0) {
        for (let i = number_a; i <= number_b; i + 2) {
          arr.push(i);
        }
      }else{
        for (let i = number_a + 1; i <= number_b; i + 2) {
          arr.push(i);
        }
      }
    }else{
      let arr = [];
      if (number_a % 2 === 0) {
        for (let i = number_a; i >= number_b; i - 2) {
          arr.push(i);
        }
      }else{
        for (let i = number_a + 1; i >= number_b; i - 2) {
          arr.push(i);
        }
      }
    }
  }
}

module.exports = get_integer_interval_2;
