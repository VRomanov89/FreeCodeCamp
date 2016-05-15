function pairElement(str) {
  var arr = [];
  for(var i = 0; i < str.length; i++){
    var character = str.charAt(i);
    switch (character) {
      case "A":
        arr.push(["A","T"]);
        break;
      case "T":
        arr.push(["T","A"]);
        break;
      case "C":
        arr.push(["C","G"]);
        break;
      case "G":
        arr.push(["G","C"]);
        break;
      default:
        break;
    }
  }
  
  //arr = str.split('');
  return arr;
}