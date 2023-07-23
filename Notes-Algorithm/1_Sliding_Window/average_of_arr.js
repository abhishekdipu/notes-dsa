/**
 * - Given an array, find the average of all contiguous subarrays of size "K"
    - i/p : [1, 2, 3, 4, 5], K = 3
    - o/p : [2, 3, 4]
        explanation : average of (1+2+3)/3 = 2; average of (2+ 3+ 4)/3: 3; average of (3+ 4+ 5)/3 = 4
 * Naive approach
 * TC : O(n * k) => n : array size, k : sub array size
 */
const avgSubArray_naive = (arr, k) => {
  const resultArr = [];
  for (let i = 0; i < arr.length - (k - 1); i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    let avg = sum / k;
    resultArr.push(avg);
  }

  return resultArr;
};

// console.log(avgSubArray_naive([1, 2, 3, 4, 5], 3));
// console.log(avgSubArray_naive([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [ 2.2, 2.8, 2.4, 3.6, 2.8 ]

const avgSubArray = (arr, k) => {
  const resultArr = [];
  let windowStart = 0;
  let windowSum = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      resultArr.push(windowSum / k);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return resultArr;
};
console.log(avgSubArray([1, 2, 3, 4, 5], 3));
console.log(avgSubArray([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [ 2.2, 2.8, 2.4, 3.6, 2.8 ]
