"use strict";

function average_uneven(collection) {
  //在这里写入代码
  let arr = [];
  collection.forEach((element) => {
    if (element % 2 === 1) {
      arr.push(element);
    }
  });
  return arr.reduce((pre, current, index) => {
    if (index === arr.length - 1) {
      return Math.round((pre + current) / arr.length);
    }
    return pre + current;
  });
}

module.exports = average_uneven;
