'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  return collection_b.filter(value => {
    let flage = false
    for(let i = 0;i<collection_a.length;i++){
      if(collection_a[i] === value) flage = true
    }
    return flage
  })
}

module.exports = get_intersection;
