'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let arr = "abcdefghijklmnopqrstuvwxyz".split("");
  let empArr = [];
  let singleA = []
  let doubleA = []

  if (number_a === number_b) {
    let singleA = arr[number_a - 1];
    let doubleA = arr[(parseInt((number_a - 1) / 26) - 1)] + arr[(number_a - 1) % 26];
    empArr.push(number_a > 26 ? doubleA : singleA);
    return empArr
  } else if (number_a < number_b) {
    for (number_a; number_a <= number_b; number_a++) {
      singleA = arr[number_a - 1];
      doubleA = arr[(parseInt((number_a - 1) / 26) - 1)] + arr[(number_a - 1) % 26];
      empArr.push(number_a > 26 ? doubleA : singleA);
    }
    return empArr;
  } else if (number_a > number_b) {
    for (number_a; number_b <= number_a; number_a--) {
      singleA = arr[number_a - 1];
      doubleA = arr[(parseInt((number_a - 1) / 26) - 1)] + arr[(number_a - 1) % 26];
      empArr.push(number_a > 26 ? doubleA : singleA);
    }
    return empArr;
  }
}

module.exports = get_letter_interval;
