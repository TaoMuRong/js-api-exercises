'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter(value => {
    let flage = false
    for(let i = 0;i<collection_b.length;i++){
      if(value % collection_b[i] === 0) flage = true
    }
    return flage
  })
}

module.exports = choose_divisible_integer;
