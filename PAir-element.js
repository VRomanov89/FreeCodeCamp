function pairElement(str) {
  var strArr = str.split('');
  var newArr = [];
  for(var i = 0; i < strArr.length; i++){
    var someArr = [];
    someArr.push(strArr[i]);
    switch(strArr[i]) {
      case "C":
        someArr.push("G");
        break;
      case "G":
        someArr.push("C");
        break;
      case "T":
        someArr.push("A");
        break;
      case "A":
        someArr.push("T");
        break;
      default:
        break;
    }
    newArr.push(someArr);
  }
  return newArr;
}