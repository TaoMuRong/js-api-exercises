"use strict";

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let arr = [];
  arr.push(number);
  while (true) {
    if (number === 0) {
      return arr;
    } else if (number >= 0) {
      number = Number((number - interval).toFixed(1));
      arr.push(number);
    } else {
      return arr
    }
  }
}

module.exports = spilt_to_zero;
