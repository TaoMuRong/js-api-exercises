'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  let flag = true
  return collection.reduce((prevent,current,index) => {
    if(flag && current === element){
      flag = false
      return index
    }
    return prevent 
  })
}

module.exports = calculate_elements_sum;

