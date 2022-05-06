'use strict';
let is_exist_element = function(collection,element){
    let flag = false
    collection.forEach((value,index) => {
      if (index % 2 === 0 && value === element) {
        flag = true
      }
    });
    return flag
};
module.exports = is_exist_element;
