'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  let arr = "abcdefghijklmnopqrstuvwxyz".split("");
  let ind = collection.reduce((pre, current,index) => {
    if(index === collection.length - 1){
      return Math.ceil((pre + current) / (index + 1))
    }
    return pre + current
  });
  return arr[ind - 1];
}

module.exports = average_to_letter;

