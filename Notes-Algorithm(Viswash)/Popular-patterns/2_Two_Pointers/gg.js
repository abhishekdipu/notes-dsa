var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const triplets = [];
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    const target = -nums[i];
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    twoSum(nums, i + 1, target, triplets);
  }
  return triplets;
};

const twoSum = (arr, l, target, triplets) => {
  let r = arr.length;
  while (l < r) {
    const sum = arr[l] + arr[r];
    if (sum === target) {
      triplets.push([-target, arr[l], arr[r]]);
      l++;
      r--;
      if (l < r && arr[l] == arr[l - 1]) l++;
      if (l < r && arr[r] == arr[r + 1]) r--;
    } else if (target < sum) {
      r--;
    } else if (target > sum) {
      l++;
    }
  }
};
