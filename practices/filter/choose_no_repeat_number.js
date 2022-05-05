'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  return collection.filter((value,index) => value  !== collection[index - 1]);
}

module.exports = choose_no_repeat_number;
