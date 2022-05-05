"use strict";
let number_map_to_word_over_26 = function (collection) {
  let arr = "abcdefghijklmnopqrstuvwxyz".split("");
  let singleA = [];
  let doubleA = [];
  return collection.map((value, index) => {
    singleA = arr[value - 1];
    doubleA = arr[parseInt((value - 1) / 26) - 1] + arr[(value - 1) % 26];
    return value > 26 ? doubleA : singleA;
  });
};

module.exports = number_map_to_word_over_26;
