/*
https://leetcode.com/problems/longest-consecutive-sequence/description/
128. Longest Consecutive Sequence

Q. Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

- You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

/**
 * Approach 1 : brute force
 * step 1 : sort the arr and get the consecutive
 * TC : O(nlogn)
 */

const longestConsecutive1 = (nums) => {
  nums.sort((a, b) => a - b);
  console.log(nums);

  let globalMax = 1;
  let localMax = 1;
  for (let i = 1; i < nums.length; i++) {
    console.log({a: nums[i], b: nums[i - 1], r: nums[i] - nums[i - 1]});
    if (nums[i] - nums[i - 1] === 1) {
      localMax++;
    } else {
      localMax = 1;
    }
    globalMax = Math.max(globalMax, localMax);
    console.log({localMax});
  }
  return globalMax;
};

/**
 * https://www.youtube.com/watch?v=P6RZZMu_maU
 * Approach 2 : find starting Point
 * Steps :
 *  1. convert array to set (removes duplicate and take O(1) for search )
 *  2. iterate over the set the check if it's starting-point of subset or not
 *  3. if "not" then do nothing
 *  4. if "yes" then calculate localMax for subset and compare with globalMax
 *
 * TC : O(n) => O(n + n) we are iterate over each element of array twice
 * SC : O(n) => we are store array into set
 */
const longestConsecutive = (nums) => {
  if (nums.length === 0) return 0;
  const set = new Set(nums);

  let localMax = 1;
  let globalMax = 1;
  for (let num of set) {
    const isStartPoint = !set.has(num - 1);
    if (isStartPoint) {
      //   console.log({num, m: 'process'});
      let target = num + 1;
      while (set.has(target)) {
        target++;
        localMax++;
      }
    } else {
      //   console.log({num, m: 'skipped'});
    }
    // console.log({localMax, globalMax});
    globalMax = Math.max(globalMax, localMax);
    localMax = 1;
  }
  return globalMax;
};

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); //4
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); //9
console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])); //9
