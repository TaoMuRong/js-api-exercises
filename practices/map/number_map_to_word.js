'use strict';
let number_map_to_word = function(collection){
  let arr = "abcdefghijklmnopqrstuvwxyz".split("");
  return collection.map(value => arr[value - 1])
};

module.exports = number_map_to_word;
