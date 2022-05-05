function count_same_elements(collection) {
  //在这里写入代码
  let arr = [
    { key: "a", count: 0 },
    { key: "e", count: 0 },
    { key: "h", count: 0 },
    { key: "t", count: 0 },
    { key: "f", count: 0 },
    { key: "c", count: 0 },
    { key: "g", count: 0 },
    { key: "b", count: 0 },
    { key: "d", count: 5 },
  ];
  collection.forEach((value, index) => {
    arr.forEach(e => {
      if(value === e.key){
        e.count++
      }
    })
  });
  return arr;
}

module.exports = count_same_elements;
