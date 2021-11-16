//bf solution: O(m^n *m) {m : targetsum , n:array length} ; SC->O(m)
const howSum1 = (targetSum, numbers) => {
  if (targetSum == 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers);
    if (remainderResult !== null) {
      return [...remainderResult, num];
    }
  }
  return null;
};

//with memoization :O(m*n *m) ; SC->O(m*m)
const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum == 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};

console.log(howSum(7, [2, 3, 4])); //true
console.log(howSum(300, [7, 14])); //null
