function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let collection_b = object_b.value;
  collection_a.forEach((value) => {
    collection_b.forEach((e) => {
      if (e === value.key) {
        value.count--;
      }
    });
  });
  return collection_a;
}

module.exports = create_updated_collection;
