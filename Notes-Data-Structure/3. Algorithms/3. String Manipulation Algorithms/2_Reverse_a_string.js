/*
Reverse a string.
Input: “hello”
Output: “olleh”
*/
//O(n^2)
const reverseString1 = (str) => {
  if (!str) return "";
  let output = "";
  //O(n)
  for (let i = str.length - 1; i >= 0; i--) {
    output += str.charAt(i); //O(n): as string is immutable in JS too, so it's copying character by character to each time, so it's time complexity will be O(n)
  }
  return output;
};

//2nd way
const reverseString = (str) => {
  if (!str) return "";
  return str.split("").reverse().join("");
};

//3rd way
const reverseStringRecursion = (str) => {
  if (str === "") return "";
  else return reverseStringRecursion(str.substring(1)) + str.charAt(0);
};

console.log(reverseString("hello"));
console.log(reverseStringRecursion("hello"));
// console.log(reverseString(" "));
// console.log(reverseString(null));
// console.log(reverseString(undefined));
