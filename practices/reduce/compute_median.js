"use strict";

function compute_median(collection) {
  //在这里写入代码
  collection = collection.sort((a, b) => {
    return a - b;
  });
  let num = collection.length;
  if (num % 2 === 0) {
    return (
      (collection[Math.floor(num / 2)] + collection[Math.floor(num / 2) - 1]) /
      2
    );
  } else {
    return collection[Math.floor(num / 2)];
  }
}

module.exports = compute_median;
