function getSecondLargest(nums) {
  let largest = -Infinity;
  // Complete the function
  for (let num of nums) {
    if (num > largest) largest = num;
  }
  //console.log(largest);

  let diff = Infinity;
  let secondLargest;
  for (let num of nums) {
    let tempDiff = largest - num;
    if (tempDiff < diff && tempDiff !== 0) {
      diff = tempDiff;
      secondLargest = num;
    }
  }

  return secondLargest;
}

const nums = [3, 6, 2, 8, 56, 56, 43, 32];

console.log(getSecondLargest(nums));
