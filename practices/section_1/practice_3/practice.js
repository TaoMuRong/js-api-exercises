function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let collection_b = object_b.value
  return collection_a.filter(value => {
    let flage = false
    for(let i = 0;i<collection_b.length;i++){
      if(collection_b[i] === value) flage = true
    }
    return flage
  })
}

module.exports = collect_same_elements;
