'use strict';
let calculate_average = function(collection){
    let arr = [];
    collection.forEach((element) => {
      if (element % 2 === 0) {
        arr.push(element);
      }
    });
    return arr.reduce((pre, current, index) => {
      if (index === arr.length - 1) {
        return Math.round((pre + current) / arr.length);
      }
      return pre + current;
    });
};
module.exports = calculate_average;
