/* leetcode 15. 3Sum
https://leetcode.com/problems/3sum/description/

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.


Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const triplets = [];
  // console.log(nums)
  for (let i = 0; i < nums.length; i++) {
    const target = -nums[i];
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    twoSum(nums, i + 1, target, triplets);
  }
  return triplets;
};

const twoSum = (arr, l, target, triplets) => {
  let r = arr.length - 1;
  while (l < r) {
    const sum = arr[l] + arr[r];
    if (sum === target) {
      triplets.push([-target, arr[l], arr[r]]);
      l++;
      r--;
      while (l < r && arr[l] == arr[l - 1]) l++;
      while (l < r && arr[r] == arr[r + 1]) r--;
    } else if (target < sum) {
      r--;
    } else if (target > sum) {
      l++;
    }
  }
};
