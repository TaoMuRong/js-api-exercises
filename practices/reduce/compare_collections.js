'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.reduce((prevent,current,index) => {
    if(index === 1){
      if(prevent === collection_b[index - 1] && current === collection_b[index]){
        return true
      }else{
        return false
      }
    }else if(prevent === false){
      return false
    }else{
      if(current === collection_b[index]){
        return true
      }else{
        return false
      }
    }
  })
}

module.exports = compare_collections;


