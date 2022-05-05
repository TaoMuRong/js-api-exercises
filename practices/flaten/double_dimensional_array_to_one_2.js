'use strict';

function double_to_one(collection) {

  //在这里写入代码
  return Array.from(new Set(collection.flat(2)) )
}

module.exports = double_to_one;
