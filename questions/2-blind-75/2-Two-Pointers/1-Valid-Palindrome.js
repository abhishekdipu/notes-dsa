/*
https://leetcode.com/problems/valid-palindrome/description/

125. Valid Palindrome
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 2 ways :

  const str = s
    .trim() //
    .replace(/[^0-9a-zA-Z]/g, '')
    .toLowerCase();

  // 1st way :  reverse the string and check
  // const strRev = str.split('').reverse().join('');
  // return str === strRev;

  // 2nd way : using 2 pointors
  let l = 0;
  let r = str.length - 1;
  while (r >= l) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }
  return true;
};
