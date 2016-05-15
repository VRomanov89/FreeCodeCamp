function uniteUnique(arr1, arr2, arr3) {
  var newArr = [];
  for(var i =0;i<arguments.length;i++) {
    for(var j =0;j<arguments[i].length;j++){
      var exists = false;
      for(var k = 0;k<newArr.length;k++){
        if(newArr[k] == arguments[i][j]) {
          exists = true;
        }
      }
      if(exists === false){
        newArr.push(arguments[i][j]);
      }
    }
  }
  
  return newArr;
}