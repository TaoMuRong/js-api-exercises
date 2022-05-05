'use strict';
let calculate_median = function(collection){
    let arr = [];
    collection.forEach((element) => {
      if (element % 2 === 0) {
        arr.push(element);
      }
    });
    let num = arr.length;
    console.log(num)
    if (num % 2 === 0) {
      return (arr[Math.floor(num / 2)] + arr[Math.floor(num / 2) - 1]) / 2;
    } else {
      return arr[Math.floor(num / 2)];
    }
};
module.exports = calculate_median;
