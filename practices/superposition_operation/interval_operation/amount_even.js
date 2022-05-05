"use strict";

function amount_even(collection) {
  //在这里写入代码
  return collection.reduce((pre, current, index) => {
    if (index === 1) {
      return current;
    }
    if (index === collection.length - 1) {
      return Math.round(pre + current);
    } else if (current % 2 === 0) {
      return pre + current;
    } else {
      return pre;
    }
  });
}

module.exports = amount_even;
