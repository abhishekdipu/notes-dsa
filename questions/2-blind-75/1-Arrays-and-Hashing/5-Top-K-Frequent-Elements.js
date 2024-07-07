/* 347. Top K Frequent Elements :: Medium
https://leetcode.com/problems/top-k-frequent-elements/description/

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.


Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]


Example 2:
Input: nums = [1], k = 1
Output: [1]

Example 3:
Input: nums = [1,1,2,2], k = 1
Output: [1,2]

Solution :
*/

/**
 * Brute force
 * Approach 1 : frequency
 * steps :
 * `1. get the frequency for each element
 *  2. sort the freq obj based on value
 *  3. get the 1st k element
 *
 * TC : O(nlogn) => O(n + nlogn + n)
 */

const topKFrequent1 = (arr = [], k) => {
  // 1. get the frequency for each element
  const freq = {};
  arr.forEach((num) => {
    freq[num] = freq[num] ? freq[num] + 1 : 1;
  });

  // 2. sort the freq obj based on value
  const freqArr = Object.keys(freq)
    .map((key) => [key, freq[key]])
    .sort((a, b) => b[1] - a[1]);

  // 3. get the 1st k element
  const res = [];
  for (let i = 0; i < k; i++) {
    res.push(freqArr[i][0]);
  }
  return res;
};
// console.log('ans 1 : ', topKFrequent1([4, 1, 1, 2, 2, 3], 2)); // [ '1', '2' ]

/**
 * Approach 2 : heapify
 * steps :
 *  1. get the frequency for each element and add to the max-heap
 *  2. pop the top k from heap
 *  TC : O(k log(n))
 */

/**
 * Approach 3 : bucket-sort
 * steps :
 *  1.  get the frequency for each element
 *  2.  create buckets for same freq elements
 *  3.  get last k elements from array end
 *
 * TC : O(n)
 */
// input arr = [1, 1, 1, 2, 2, 3]
const topKFrequent = (arr = [], k) => {
  // 1.  get the frequency for each element
  const freq = {};
  arr.forEach((num) => {
    freq[num] = freq[num] ? freq[num] + 1 : 1;
  });

  // console.log({freq}); // { freq: { '1': 3, '2': 2, '3': 1 } }

  /* 2. create buckets for same freq elements

    create an array (call it bucket), which will group all elements with same frequency in array and store at that index which is 
    equal to its frequency. 

    this bucket array should be of size equal to length of input array +1 because max frequency any element can have is equal to 
    length of array in case when all elements of array are same.
    => length +1 because arrays are 0 indexed, means array for size 6 can have index from 0 to 5 only, and if all elements are same
    means they will be freq of 6 then we need to store that elements at index 6.

    example : for input arr = [1,1,1,2,2,3], k = 2
    bucket = [0,[3],[2],[1],0,0]

    example 2: for input arr = [1,1,1,2,2,2,3]
    bucket = [0,[3],0,[1,2],0,0]
  */
  const bucket = new Array(arr.length + 1).fill(0);
  for (let key in freq) {
    const val = freq[key];
    if (bucket[val] === 0) {
      bucket[val] = [key];
    } else {
      bucket[val].push(key);
    }
  }
  //   console.log({bucket});
  /*
  bucket: [ 0, [ '3' ], [ '2' ], [ '1' ], 0, 0, 0 ]
  now step 3. get last k elements from array end
  */
  const res = [];
  for (let i = bucket.length - 1; i > 0; i--) {
    if (bucket[i] !== 0) {
      res.push(...bucket[i]);
      if (res.length === k) return res;
    }
  }
};
console.log('ans 3 : ', topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [ '1', '2' ]
console.log('ans 3 : ', topKFrequent([1, 1, 1, 2, 2, 2, 3], 2)); // [ '1', '2' ]
console.log('ans 3 : ', topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)); // [ '2', '-1' ]
