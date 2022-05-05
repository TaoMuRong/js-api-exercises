"use strict";

function hybrid_operation_to_uneven(collection) {
  //在这里写入代码
  let count = 1;
  return collection.reduce((pre, current, index) => {
    if (index === collection.length - 1) {
      return Math.round(Math.round(pre * 3 + 5 * count));
    } else if (current % 2 === 1) {
      count++;
      return pre + current;
    } else {
      return pre;
    }
  });
}

module.exports = hybrid_operation_to_uneven;
