'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  return collection.reduce((prevent,current) => {
    return prevent < current ? prevent : current
  })
}

module.exports = collect_min_number;

