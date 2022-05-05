"use strict";
let even_asc_odd_desc = function (collection) {
  let arr_a = [];
  let arr_b = [];
  let res = [];
  collection.forEach((element) => {
    if (element % 2 === 0) {
      arr_a.push(element);
    } else {
      arr_b.push(element);
    }
  });
  arr_a
    .sort((a, b) => a - b)
    .forEach((e) => {
      res.push(e);
    });
  arr_b
    .sort((a, b) => a - b)
    .reverse()
    .forEach((e) => {
      res.push(e);
    });
  return res;
};
module.exports = even_asc_odd_desc;
