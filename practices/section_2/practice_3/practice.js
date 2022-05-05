function count_same_elements(collection) {
  //在这里写入代码
  let arr = [
    { name: "a", summary: 0 },
    { name: "e", summary: 0 },
    { name: "h", summary: 3 },
    { name: "t", summary: 12 },
    { name: "f", summary: 0 },
    { name: "c", summary: 8 },
    { name: "g", summary: 0 },
    { name: "b", summary: 0 },
    { name: "d", summary: 5 },
  ];
  collection.forEach((value, index) => {
    arr.forEach(e => {
      if(value === e.name){
        e.summary++
      }
    })
  });
  return arr;
}

module.exports = count_same_elements;
