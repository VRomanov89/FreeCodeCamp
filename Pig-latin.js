function translatePigLatin(str) {
  var strArr = str.split('');
  //return strArr[0] != "a" && strArr[0] != "o";
  if(strArr[0] != "a" && strArr[0] != "o" &&  strArr[0] != "e" &&  strArr[0] != "u" &&  strArr[0] != "i") {
    while(strArr[0] != "a" && strArr[0] != "o" &&  strArr[0] != "e" &&  strArr[0] != "u" &&  strArr[0] != "i") {
      strArr.push(strArr[0]);
      strArr.splice(0,1);
    }
    strArr.push("ay");
  }else{strArr.push("way");}
  return strArr.join('');
}