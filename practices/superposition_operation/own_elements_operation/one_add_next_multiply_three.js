"use strict";
function one_add_next_multiply_three(collection) {
  let arr = [];
  collection.reduce((pre, current) => {
    arr.push((pre + current) * 3);
    return current;
  });
  return arr;
}
module.exports = one_add_next_multiply_three;
