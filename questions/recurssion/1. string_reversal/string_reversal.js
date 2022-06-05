const reverseString = (str) => {
  if (str === "") {
    return "";
  }

  return reverseString(str.substring(1)) + str[0];
};

console.log(reverseString("k")); //olleh

/** input : hello           
      call stack            |call stack result
----------------------------|-------------------
''                          |
reverseString('') + "o"     |o
reverseString('o') + "l"    |ol
reverseString('lo') + "l"   |oll
reverseString('llo') + "e"  |olle
reverseString('ello') + "h" |olleh
----------------------------|--------------------
 */
