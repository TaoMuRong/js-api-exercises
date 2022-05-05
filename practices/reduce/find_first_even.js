'use strict';

function find_first_even(collection) {
  //在这里写入代码
  let flag = true
  return collection.reduce((prevent,current) => {
    if(flag && current % 2 === 0){
      flag = false
      return current
    }
    return prevent 
  })
}

module.exports = find_first_even;

