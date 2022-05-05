"use strict";

function hybrid_operation_to_uneven(collection) {
  //在这里写入代码
  let arr = [];
  collection.forEach((element) => {
    if (element % 2 === 1) {
      arr.push(Math.round(element * 3 + 2));
    }
  });
  return arr
}

module.exports = hybrid_operation_to_uneven;
