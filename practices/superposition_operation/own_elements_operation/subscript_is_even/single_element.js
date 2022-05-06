"use strict";
let single_element = function (collection) {
  let arr = [];
  collection.forEach((value, index) => {
    if ((index + 1) % 2 === 0) {
      arr.push(value);
    }
  });

  return arr.filter((value) => arr.indexOf(value) !== 0);
};
module.exports = single_element;
