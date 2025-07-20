/*
Check if a string is a rotation of another string.
Input: “ABCD”, “DABC” (rotate one char to the right)
Output: true
Input: “ABCD”, “CDAB” (rotate two chars to the right)
Output: true
Input: “ABCD”, “ADBC”
Output: false

solution :
concat str1 with itself and check if contains str2
*/

const areRotations = (str1, str2) => {
  if (!str1 || !str2) return false;
  //   if (str1.length !== str2.length) return false;
  //   if ((str1 + str1).includes(str2)) return true;
  //   return false;

  return str1.length === str2.length && (str1 + str1).includes(str2);
};

console.log(areRotations("ABCD", "DABC")); //true
console.log(areRotations("ABCD", "ADBC")); //false
console.log(areRotations("ABCD", null)); //false
console.log(areRotations(null, null)); //false
