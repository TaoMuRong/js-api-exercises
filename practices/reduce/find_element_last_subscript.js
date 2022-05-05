'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  return collection.reduce((prevent,current,index) => {
    if(current === element){
      return index
    }
    return prevent 
  })
}

module.exports = calculate_elements_sum;
