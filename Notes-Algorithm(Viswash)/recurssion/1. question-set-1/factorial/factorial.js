const factorial1 = (num) => {
  if (num < 0) return null;
  if (num === 0) return 1;

  return factorial1(num - 1) * num;
};

let input1 = 100;
let ans1 = factorial1(input1);
console.log(ans1);

// with memoization
const factorial = (num) => {
  if (num < 0) return null;
  let memo = {};
  if (num in memo) return memo[num];
  if (num === 0) return 1;

  memo[num] = factorial(num - 1) * num;
  return memo[num];
};

let input = 100;
let ans = factorial(input);
console.log(ans);
