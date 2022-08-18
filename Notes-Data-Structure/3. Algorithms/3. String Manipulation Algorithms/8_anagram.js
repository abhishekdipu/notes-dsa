/*
Detect if two strings are anagram of each other. A string is an
anagram of another string if it has the exact same characters in any
order.
Input: “abcd”, “adbc”
Output: true
Input: “abcd”, “cadb”
Input: true
Input: “abcd”, “abcd”
Output: true
Input: “abcd”, “abce”
Output: false
*/

const areAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const memo1 = {};
  const memo2 = {};

  for (let char of str1) {
    if (!(char in memo1)) {
      memo1[char] = 1;
    } else memo1[char]++;
  }

  for (let char of str2) {
    if (!(char in memo2)) {
      memo2[char] = 1;
    } else memo2[char]++;
  }

  for (let key in memo1) {
    if (!(key in memo2)) return false;
    if (memo1[key] !== memo2[key]) return false;
  }
  return true;
};

console.log(areAnagram("abcd", "adbc"));
console.log(areAnagram("abcd", "abce"));
