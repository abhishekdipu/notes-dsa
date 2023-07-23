/**
 * Given an array of positive numbers and a positive number "s", find the length of the
 * smallest contiguous subarray whose sum is greater than or equal to "s". Return 0
 * if no such subarray exists.
 *
 * [1, 3, 2, 2, 4, 5], s = 6
 * o/p : 2
 * => sum of 2, 4
 *
 * Solution using sliding window algorithm :
 * 1. Initialize windowStart and windowEd at the Oth index
 *  2. Add value in window to windowSum
 * 3. Is value greater than or equal to s?
 *  • If yes:
 *      A. Capture length of window in minLengthSoFar (if it is smaller than the current minLengthSoFar)
 *      B. Shrink sliding window by decrementing window Start
 *      C. Repeat from Step 3
 * • If no:
 *      A. Grow sliding window to next element by incrementing windowEnd
 *      B. Repeat from Step 3
 */

const smallestContiguousSubArray = (arr, s) => {
  let windowStart = 0;
  let windowSum = 0;
  let minLengthSoFar = Infinity; //Number.MAX_VALUE;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    // is windowSum >= s?
    // if not, continue iteration, grow the window
    // if yes.... shrink the window • (until windowSum < s again)

    while (windowSum >= s) {
      // shrink the window, decrement windowStart, remove that first element in window from new shrunken window
      let currentWindowLength = windowEnd - windowStart + 1;
      minLengthSoFar = Math.min(currentWindowLength, minLengthSoFar);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  if (minLengthSoFar === Infinity) return 0;
  return minLengthSoFar;
};

console.log(smallestContiguousSubArray([1, 3, 2, 2, 4, 5], 6)); //2
console.log(smallestContiguousSubArray([2, 1, 5, 2, 8], 7)); //1
console.log(smallestContiguousSubArray([2, 1, 5, 2, 8], 117)); //0
