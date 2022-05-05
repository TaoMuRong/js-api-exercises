"use strict";

function grouping_count(collection) {
  //在这里写入代码
  let obj = {'1':0, '2':0, '3':0, '4':0};
  collection.filter(value => {
    let str = "" + value
    obj[str] ++
  })
  return obj
}

module.exports = grouping_count;
