/**
 * Q. Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
   [1, 2, 3, 4, 5], target sum = 7

- Ans : [5, 2]
 */

/* Naive Approach
- Use a nested for loop
- timeComplexity : O(n^2)
 */
const twoSum_naive = (arr, targetSum) => {
  let pair = null;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == targetSum) {
        pair = [arr[i], arr[j]];
      }
    }
  }
  return pair;
};

console.log(twoSum_naive([1, 2, 3, 4, 5], 7)); //[ 2, 5 ]
console.log(twoSum_naive([1, 6, 8, 9, 10], 14)); //[ 6, 8 ]
console.log(twoSum_naive([1, 3, 4, 6, 8, 10], 12)); //[ 4, 8 ]
console.log(twoSum_naive([1, 2, 3, 4, 5], 10)); //null

/** Two pointer approach
 */
const twoSum = (arr, targetSum) => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let pair = null;

  // get the element at each pointer, and add to get a pairSum
  // is pairSum == targetSum? If yes, return 1t
  // is pairSum < targetSum? If yes, increment leftPointer
  // is pairSum > targetSum? If yes, decrement rightPointer
  while (leftPointer != rightPointer) {
    let pairSum = arr[leftPointer] + arr[rightPointer];
    if (pairSum === targetSum) {
      pair = [arr[leftPointer], arr[rightPointer]];
      break;
    } else if (pairSum < targetSum) {
      leftPointer++;
    } else if (pairSum > targetSum) {
      rightPointer--;
    }
  }
  return pair;
};

console.log(twoSum([1, 2, 3, 4, 5], 7)); //[ 2, 5 ]
console.log(twoSum([1, 6, 8, 9, 10], 14)); //[ 6, 8 ]
console.log(twoSum([1, 3, 4, 6, 8, 10], 12)); //[ 4, 8 ]
console.log(twoSum([1, 2, 3, 4, 5], 10)); //null
