/* LC-242 :: Valid Anagram :: Easy

Q. Given two strings s and t, return "true" if t is an anagram of s, and "false" otherwise.

Info : An Anagram is a word or phrase formed by rearranging the letters of a different word or 
       phrase, typically using all the original letters exactly once.

 

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

* Solution : https://www.youtube.com/watch?v=9UtInBqnCgA

 

*/

/* Follow this one : 
* Approach 1 : frequency count
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

/*
* Approach 2: sort the string and compare
* TC : O(nlogn) 
    explanation => split : O(n); sort : O(nlogn); join : O(n)
 */
var isAnagram2 = function (s, t) {
  return s.split('').sort().join() === t.split('').sort().join();
};

/* 
* Approach 3 : Using ASCII
- ASCII : https://www.w3schools.com/charsets/ref_html_ascii.asp
- there are total 256 ASCII characters from 0-255
    A-Z : 65-90
    a-z : 97- 122
* TC : O(n)
*/
const isAnagram3 = (s, t) => {
  let arr = new Array(256).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i)]++;
  }

  for (let i = 0; i < t.length; i++) {
    arr[t.charCodeAt(i)]--;
  }
  return arr.every((value) => value === 0);
};

console.log(isAnagram3('anagram', 'nagaram')); // true
console.log(isAnagram3('rat', 'car')); //false
