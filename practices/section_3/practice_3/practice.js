function create_updated_collection(collection_a, object_b) {
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
    { key: "d", count: 0 },
  ];
  collection_a.forEach((value, index) => {
    arr.forEach((e) => {
      if (value === e.key) {
        e.count++;
      }
    });
  });

  let collection_b = object_b.value;
  arr.forEach((value) => {
    collection_b.forEach((e) => {
      if (e === value.key) {
        value.count -= Math.floor(value.count / 3);
      }
    });
  });
  return arr;
}

module.exports = create_updated_collection;
