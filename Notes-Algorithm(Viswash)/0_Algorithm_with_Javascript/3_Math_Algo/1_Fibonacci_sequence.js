/** Fibonacci sequence
Question : 
    Give a number 'n', find the first 'n' elements of the Fibonacci sequence

explanations : 
    In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
    The first two numbers in the sequence are 0 and 1.

sample output : 
    fibonacci (2) = [0,1]
    fibonacci(3) = [0, 1, 1]
    fibonacci(7) = [0,1, 1,2,3,5,8]
 */

//Time complexity : O(n)
const fibonacci = (n) => {
  if (n < 1) throw new Error(`invalid input`);

  let fib = [];
  if (n === 1) fib = [0];
  if (n === 2) fib = [0, 1];

  if (n > 2) {
    fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  }

  return fib;
};

// using recursion
// const fibonacci = (n) => {
//   if (n < 1) throw new Error(`invalid input`);
//   const result = [];
//   for (let i = 1; i <= n; i++) {
//     result.push(getFibonacciAt(i));
//   }
//   return result;
// };

// const getFibonacciAt = (n) => {
//   if (n === 1) return 0;
//   if (n === 2) return 1;
//   return getFibonacciAt(n - 1) + getFibonacciAt(n - 2);
// };

// console.log(fibonacci(0)); // [0,1]
console.log(fibonacci(1)); // [0,1]
console.log(fibonacci(2)); // [0,1]
console.log(fibonacci(3)); // [0, 1, 1]
console.log(fibonacci(7)); // [0,1, 1,2,3,5,8]
