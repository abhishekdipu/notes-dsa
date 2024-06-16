/* [LC-49 Group Anagrams Medium](https://leetcode.com/problems/group-anagrams/description/)

Q. Given an array of strings "strs", group the anagrams together. You can return the answer in any order.
    - An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
    typically using all the original letters exactly once.


Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

* Solution approach: 
 steps : 
 1. create a map to store the final result in form of key-value pair as below
        {
          '10001000000000000001000000' => [ 'eat', 'tea', 'ate' ],
          '10000000000001000001000000' => [ 'tan', 'nat' ],
          '11000000000000000001000000' => [ 'bat' ]
        }
    here key tells which alphabet occurred how many times. key : 'a1b1c0d0e1f0g0h0i0j0k0l0m0n0o0p0q0r0s0t0u0v0w0x0y0z0' 
    and value: ['eat', 'tea', 'ate']
 2. loop through the array, and for each element, create a key by counting the frequency of each character in the string
 3. and keep on putting in the map
 * TC : O(n*m) :: n -> size of array, m => average length of strings in the array
 */

const groupAnagram = (arr) => {
  const map = new Map(); // it'll store the final result
  for (let str of arr) {
    const charCount = new Array(26).fill(0); // it'll store the count of each character in the string
    for (let char of str) {
      charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++; // for a->0, b->1, ...., z->25
    }
    const key = charCount.join(''); // it'll be the key for the map
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }
  console.log('map', map);

  return Array.from(map.values());
};
const ans = groupAnagram(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
console.log(ans);
