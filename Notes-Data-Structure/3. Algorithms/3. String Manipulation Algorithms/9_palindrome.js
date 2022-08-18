/*
Check if a string is palindrome. If we read a palindrome string from
left or right, we get the exact same characters.
Input: “abba”
Output: true

Input: “abcba”
Output: true

Input: “abca”
Output: false
*/

const isPalindrome = (str) => {
  let start = 0;
  let end = str.length - 1;

  while (start < str.length / 2) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }
  return true;
};
console.log(isPalindrome("abba")); //true
console.log(isPalindrome("abca")); //false
