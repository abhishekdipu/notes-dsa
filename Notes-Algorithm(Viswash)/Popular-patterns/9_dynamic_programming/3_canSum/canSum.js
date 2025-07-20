//using brute force
const canSum1 = (targetSum, numbers) => {
  //base case
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    let remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) return true;
  }

  return false;
};

//using memoization
const canSum = (targetSum, numbers, memo = {}) => {
  //base case
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
};

console.log(canSum(7, [2, 3, 4])); //true
console.log(canSum(8, [2, 3, 5])); //true
console.log(canSum(7, [2, 4])); //false
console.log(canSum(300, [7, 14])); //false(takes time)
