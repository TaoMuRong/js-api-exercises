'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  return collection.reduce((prevent,current) => {
    return prevent > current ? prevent : current
  })
}

module.exports = collect_max_number;
