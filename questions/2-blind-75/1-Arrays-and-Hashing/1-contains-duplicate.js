/* LC-217 (Easy)
 Given an integer array nums, return true if any value appears at least twice in the array, 
 and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

* Solution : https://www.youtube.com/watch?v=3OamzN90kPg
Steps : 
  1. make use of set.
  2. iterate over the array, and keep adding element to set, if found in set then return true.
*/

// TC : O(n), SC: O(n)
const containsDuplicate = (nums) => {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      return true;
    } else {
      set.add(num);
    }
  }
  return false;
};

/*
 * Approach 2 : create a new set from the given array, and compare its size with array length
- TC : O(1), SC: O(n)
 */
const containsDuplicate2 = (nums) => {
  const set = new Set(nums);
  return set.size !== nums.length;
};

console.log(containsDuplicate([1, 2, 3, 1])); //true
console.log(containsDuplicate([1, 2, 3, 4])); //false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); //true
