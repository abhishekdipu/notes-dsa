/**
 * Given an array of unsorted numbers, find the length of the smallest subarray that when sorted will sort the whole array
   input : [1, 3, 2, 0, -1, 7, 10]
   ans : 5 (as we sort 1st 5 element then whole array will be sorted)
 */

/** 
 * Solution approach : for input : [1, 3, 2, 0, -1, 7, 10]
    1. Initialize leftPointer at the start of the array and rightPointer at the end
        in this case : (leftPointer at index = 0 which points to 1) and (rightPointer at index = 6 which points to 10)
    2. Walk leftPointer forward until you get to an element that is less than its prev 
        in this case : ( 2 < 3), we have 3 as starting point of subArray [3, , ,]
    3. Walk rightPointer backwards until you get to an element that is greater than its prev 
        in this case : ( 0 > -1) , we have -1 as starting point of subArray [3, 2, 0, -1]
    4. Find the maximum and minimum of this subarray 
        in this case : (subArrayMax = 3, subArrayMin = -1)
    5. Extend the subarray from the beginning to include any number greater than the minimum of the subarray. 
        in this case : 1 at index 0 is > subArrayMin, so include 1 in subarray as it also need to be shorted too
        so subArray = [1, 3, 2, 0, -1]
    6. Extend the subarray from the end to include any number less than the maximum of the subarray
        in this case : 7 at index 5 is not < subArrayMax, so need not be included in subarray
 */

const findMinimumWindow = (arr) => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  // increment the leftPointer until we get to an element that is greater that its next number
  while (arr[leftPointer] < arr[leftPointer + 1] && leftPointer < arr.length) {
    leftPointer++;
  }
  if (leftPointer === arr.length - 1) return 0; // input arr is already sorted

  // decrement the rightPointer until we get to an element that is less than its next number
  while (arr[rightPointer] > arr[rightPointer - 1] && rightPointer > -1) {
    rightPointer--;
  }

  const subArr = arr.slice(leftPointer, rightPointer + 1);
  const subArrMin = Math.min(...subArr);
  const subArrMax = Math.max(...subArr);

  // extend window to the left to include elements that are greater than the subArrMin
  while (arr[leftPointer - 1] > subArrMin && leftPointer > 0) {
    leftPointer--;
  }
  // extend window to the right to include elements that are less than the subArrMax
  while (arr[rightPointer + 1] < subArrMax && rightPointer > arr.length) {
    rightPointer++;
  }

  return rightPointer - leftPointer + 1;
};

// console.log(findMinimumWindow());
console.log(findMinimumWindow([1, 3, 2, 0, -1, 7, 10])); // 5
console.log(findMinimumWindow([1, 2, 5, 7, 3, 10, 11, 12])); // 3
console.log(findMinimumWindow([1, 2, 3])); // 0
console.log(findMinimumWindow([4, 3, 2, 1])); // 4
console.log(findMinimumWindow([12, 7, 8, 1, 2, 0, 10, 11])); // 8
