function fearNotLetter(str) {
  var charcode = 0;
  var missingCharcode = 0;
  for(var i = 0; i < str.length; i++) {
    if (charcode === 0) {
      charcode = str.charCodeAt(i);
    }else{
      //return String.fromCharCode(charcode);
      if(str.charCodeAt(i) - 1 == charcode) {
        charcode = str.charCodeAt(i);
      }else{
       return String.fromCharCode(str.charCodeAt(i)-1);
        //missingCharcode = str.charCodeAt(i);
      }
      
    }
  }
  return undefined;
  return String.fromCharCode(missingCharcode-1);
}mi