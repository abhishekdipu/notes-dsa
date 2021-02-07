/*
fib -> 1,1,2,3,5,8...
Q. get nth fibo no.
*/

//without memoization
//TC : O(2^n) || SC : O(n)
const fib1 = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

//with memoization
//TC : O(n) || SC : O(n)
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];

  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(50));
