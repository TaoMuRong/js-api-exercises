function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let collection_b = object_b.value;
  let arr = []
  collection_a.forEach((value) => {
    value = value.key;
    for (let i = 0; i < collection_b.length; i++) {
      if (collection_b[i] === value) arr.push(value);
    }
  });
  return arr
}

module.exports = collect_same_elements;
