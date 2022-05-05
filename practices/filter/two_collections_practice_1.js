'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter(value => {
    let flage = false
    for(let i = 0;i<collection_b.length;i++){
      if(collection_b[i] === value) flage = true
    }
    return flage
  })
}

module.exports = choose_common_elements;
