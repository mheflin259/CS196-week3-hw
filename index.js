function multiplyList(list) {
  var multipliedList = list.map(list => list * 3);
  return multipliedList;
}

console.log(multiplyList([1, 2, 3, 4]));
