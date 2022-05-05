'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  let index = []
  collection_b = collection_b.filter(value => {
    let flage = true
    for(let i = 0;i<collection_a.length;i++){
      if(collection_a[i] === value) flage = false
    }
    return flage
  })
  collection_a = collection_a.concat(collection_b)
  return collection_a
}

module.exports = get_union;

