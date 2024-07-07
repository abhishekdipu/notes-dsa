/**
https://leetcode.com/problems/product-of-array-except-self/description/
238. Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // const product = nums.reduce((a,c)=>a*c);
  // console.log(product)
  const prefix = []; // [1*1, 1*2, 2*3, 6*4] = [1,2,6,24]
  const postfix = []; // [24*1, 12*2 ,4*3 ,1*4] = [24, 24, 12, 4]
  const output = [];

  for (let i = 0; i < nums.length; i++) {
    const prev = i <= 0 ? 1 : prefix[i - 1];
    prefix[i] = prev * nums[i];
  }
  // console.log('prefix-->', prefix);

  for (let i = nums.length - 1; i >= 0; i--) {
    const prev = i >= nums.length - 1 ? 1 : postfix[i + 1];
    postfix[i] = prev * nums[i];
  }
  // console.log('postfix-->', postfix);

  for (let i = 0; i < nums.length; i++) {
    const prev = i <= 0 ? 1 : prefix[i - 1];
    const next = i >= nums.length - 1 ? 1 : postfix[i + 1];
    output[i] = prev * next;
  }

  return output;
};

console.log(productExceptSelf([1, 2, 3, 4])); //[ 24, 12, 8, 6 ]
