"use strict";

function compute_average(collection) {
  //在这里写入代码
  return collection.reduce((prevent, current, index) => {
    if (index === collection.length - 1) {
      return (prevent + current) / (index + 1);
    }
    return prevent + current;
  });
}

module.exports = compute_average;
