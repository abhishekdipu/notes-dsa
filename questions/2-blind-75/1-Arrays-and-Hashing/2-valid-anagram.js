/* LC : 242. Valid Anagram
- Easy

Q. Given two strings s and t, return "true" if t is an anagram of s, and "false" otherwise.

Info : An Anagram is a word or phrase formed by rearranging the letters of a different word or 
       phrase, typically using all the original letters exactly once.

 

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Sol : https://www.youtube.com/watch?v=9UtInBqnCgA
*/

/* Follow this one : 
1st sol : frequency count
1. count frequency of each characters in string "s" and string "t"
2. validate of both have same frequency for same char

*/
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const countS = {};
  const countT = {};
  for (let i = 0; i < s.length; i++) {
    countS[s[i]] = countS[s[i]] ? countS[s[i]] + 1 : 1;
    countT[t[i]] = countT[t[i]] ? countT[t[i]] + 1 : 1;
  }

  for (let key in countS) {
    if (countS[key] !== countT[key]) return false;
  }
  return true;
};

//2nd solution : sort the string and compare
var isAnagram2 = function (s, t) {
  return s.split('').sort().join() === t.split('').sort().join();
};

/* Solution 3 : Using ASCII
- ASCII : https://www.w3schools.com/charsets/ref_html_ascii.asp
    A-Z : 65-90
    a-z : 97- 122
*/
var isAnagram3 = function (s, t) {
  let map = new Array(256).fill(0);
  for (let i = 0; i < s.length; i++) {
    map[s.charCodeAt(i)]++;
  }

  for (let i = 0; i < t.length; i++) {
    map[t.charCodeAt(i)]--;
  }
  return map.every((value) => value === 0);
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); //false
