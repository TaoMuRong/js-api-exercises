"use strict";

function even_to_letter(collection) {
  //在这里写入代码
  let arr = "abcdefghijklmnopqrstuvwxyz".split("");
  let singleA = [];
  let doubleA = [];
  collection = collection.filter((value) => value % 2 === 0);
  return collection.map((value, index) => {
    singleA = arr[value - 1];
    doubleA = arr[parseInt((value - 1) / 26) - 1] + arr[(value - 1) % 26];
    return value > 26 ? doubleA : singleA;
  });
}

module.exports = even_to_letter;
