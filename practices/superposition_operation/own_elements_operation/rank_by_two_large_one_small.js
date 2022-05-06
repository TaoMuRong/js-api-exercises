"use strict";
function rank_by_two_large_one_small(collection) {
  //这里写代码。。。
  collection.sort((a, b) => a - b);
  let arr = [];
  while (collection[0]) {
    let small = collection.shift();
    if (collection[0]) {
      let large_a = collection.shift();
      arr.push(large_a);
    }
    if (collection[0]) {
      let large_b = collection.shift();
      arr.push(large_b);
      arr.push(small);
    }else{
      let tem = arr.pop()
      arr.push(small)
      arr.push(tem)
    }
  }
  return arr;
}
module.exports = rank_by_two_large_one_small;
