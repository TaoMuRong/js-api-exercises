'use strict';

function find_last_even(collection) {
  //在这里写入代码
  return collection.reduce((prevent,current) => {
    if(current % 2 === 0){
      return current
    }
    return prevent 
  })
}

module.exports = find_last_even;
