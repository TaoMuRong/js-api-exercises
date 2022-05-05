"use strict";

function median_to_letter(collection) {
  //在这里写入代码
  let num = collection.length;
  let ind = 0;
  let arr = "abcdefghijklmnopqrstuvwxyz".split("");
  let singleA = [];
  let doubleA = [];
  if (num % 2 === 0) {
    ind = Math.ceil(
      (collection[Math.floor(num / 2)] + collection[Math.floor(num / 2) - 1]) /
        2
    );
  } else {
    ind = collection[Math.floor(num / 2)];
  }
  singleA = arr[ind - 1];
  doubleA = arr[parseInt((ind - 1) / 26) - 1] + arr[(ind - 1) % 26];
  return ind > 26 ? doubleA : singleA;
}

module.exports = median_to_letter;
