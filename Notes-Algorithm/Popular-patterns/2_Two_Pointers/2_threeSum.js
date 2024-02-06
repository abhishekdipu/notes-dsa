/**
 * Given an array of unsorted numbers, find all "unique" triplets in it that add up to zero.
- Arr : [-3, 0, 1, 2, -1, 1, -2]

- Ans : [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]


- Solution approach using two pointers :
1. Array is unsorted so 1st Sort the array
2. Loop over the array
    a. Take the negative of the array[i] as a targetSum 
        (eg. if arr[i] = 1 then targetSum = -1, if  if arr[i] = -1 then targetSum = 1)
    b. Look for the pair of numbers that add to the targetSum using two pointers as usual
![](./screenshots/threeSum.png)
 */

const threeSum = (arr) => {
  arr.sort((a, b) => a - b); // JS way to sort array in ascending order
  const triplets = [];

  for (let i = 0; i < arr.length; i++) {
    let targetSum = -arr[i];
    /* we want to avoid duplicate triplets, so
        if the element we're looking at is the same as the element we just looked at then its triplet will be identical so skip it
    */
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    twoSum(arr, targetSum, i + 1, triplets);
  }

  return triplets;
};

const twoSum = (arr, targetSum, leftPointer, triplets) => {
  let rightPointer = arr.length - 1;
  while (leftPointer < rightPointer) {
    let currentSum = arr[leftPointer] + arr[rightPointer];
    // if we found the triplets
    if (currentSum === targetSum) {
      triplets.push([-targetSum, arr[leftPointer], arr[rightPointer]]);
      // we want to find more possible pair for given target sum
      leftPointer++;
      rightPointer--;

      // as we are looking for unique triplets, so need to have unique pairs too for given targetSum
      //move the left pointer up until we get an integer that is different
      while (leftPointer < rightPointer && arr[leftPointer] === arr[leftPointer - 1]) {
        leftPointer++;
      }
      //move the right pointer down until we get an integer that is different
      while (leftPointer < rightPointer && arr[rightPointer] === arr[rightPointer + 1]) {
        rightPointer--;
      }
    } else if (targetSum > currentSum) {
      leftPointer++;
    } else if (targetSum < currentSum) {
      rightPointer--;
    }
  }
};

console.log(threeSum([-3, 0, 1, 2, -1, 1, -2])); //[[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
console.log(threeSum([-5, 2, -1, -2, 3])); // [[-5,2,3], [-2,-1,3]]
console.log(threeSum([-2, 0, 3, -1, 4, 0, 3, 4, 1, 1, 1, -3, -5, 4, 0])); // [[-5,2,3], [-2,-1,3]]

/*

var threeSum = function(nums) {
  nums.sort((a,b)=>a-b);
  const triplets = []
  console.log(nums)
  for(let i=0; i<nums.length; i++){
      const target = -nums[i];
      if(i>0 && nums[i] === nums[i-1]) continue;
      twoSum(nums, i+1, target, triplets);
  }
  return triplets;
};

const twoSum = (arr, l, target,triplets)=>{
  let r = arr.length;
  while(l < r){
      const sum = arr[l] + arr[r];
      if(sum === target){
          triplets.push([-target, arr[l], arr[r]]);
          l++;
          r--;
          if(l<r && arr[l] == arr[l-1]) l++
          if(l<r && arr[r] == arr[r+1]) r--;
      }else if(target<sum){
          r--;
      }else if(target>sum){
          l++;
      }
  }

}
*/
