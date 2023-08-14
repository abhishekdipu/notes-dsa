/**Binary search
Question : Given **sorted array** of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

sample output :
arr = [-5, 2, 4, 6, 10], t = 10 -> Should return 4
arr = [-5, 2, 4, 6, 101, t = 6 -> Should return 3
arr = [-5, 2, 4, 6, 10], t = 20 -> Should return -1
 
Binary search pseudocode
1. If the array is empty, return -1 as the element cannot be found.
2. If the array has elements, find the middle element in the array. If target is equal to the middle element, return the middle element index.
3. If target is less than the middle element, binary search left half of the array.
4. If target is greater than middle element, binary search right half of the array.
 */

// Big-O : O(log n)
const binarySearch = (arr, target) => {
  if (arr.length === 0) return;

  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[midIndex]) {
      return midIndex;
    } else if (target < arr[midIndex]) {
      rightIndex = midIndex - 1;
    } else leftIndex = midIndex + 1;
  }
  return -1;
};

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); //4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); //4
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); //-1
