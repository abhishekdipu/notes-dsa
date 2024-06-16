/*
[LC-1 Easy](https://leetcode.com/problems/two-sum/description/)

Q. Given an array of integers nums and an integer target, return indices of the two numbers 
    such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

/*
* Solution approach : use map and memoize
  1. create map tp store {number : index}
  2. iterate over the array -> get the compliment -> check if its available in map
* TC : O(n)
*/

/**
 *
 * @param {Array} nums
 * @param {Number} target
 * @returns {Array}
 */
const twoSum = (nums, target) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
};

console.log(twoSum([3, 2, 4], 6)); //[ 1, 2 ]
console.log(twoSum([3, 3], 6)); //[ 0, 1 ]
