/** Factorial of a number
Question :  
    Give an integer 'n', find the factorial of that integer

explanations : 
    In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive 
    integers less than or equal to 'n'.

sample output : 
    Factorial of zero is 1.
    factorial(4) = 4*3*2*1 = 24
    factorial(5) = 5*4*3*2*1 = 120 
*/

// Big-O ; O(n)
const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2*1 = 2
console.log(factorial(4)); // 4*3*2*1 = 24
console.log(factorial(5)); // 5*4*3*2*1 = 120
