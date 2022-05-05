"use strict";

function hybrid_operation(collection) {
  //在这里写入代码
  return collection.reduce((pre, current, index) => {
    if (index === collection.length - 1) {
      return Math.round((pre + current) * 3 + 2 * (index + 1));
    }
    return pre + current;
  });
}

module.exports = hybrid_operation;
