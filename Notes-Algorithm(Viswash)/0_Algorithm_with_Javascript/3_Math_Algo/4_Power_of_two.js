/** Power of Two
Question : 
     Give a positive integer 'n', determine if the number is a power of 2 or not 

explanations : 
     An integer is a power of two if there exists an integer 'x' such that 'n' === 2x

sample output :
    isPowerOfTwo(1) = true (2^0)
    isPowerOfTwo(2) = true (2^1)
    isPowerOfTwo(5) = false


Solution - Pseudocode
n = 8
8/2 = 4 (remainder 0)
4/2 = 2 ( remainder 0)
2/2 = 1 remainder 0)
If remainder is not O in any step, 'n' is not a power of two
If remainder is 0 and 'n' comes down to 1 eventually, n is a power of two.
*/

// big-O : O(n)
const isPowerOfTwo_solution2 = (n) => {
  let power = 1;
  while (power < n) {
    power = power * 2;
  }

  if (power === n) return true;
  return false;
};

// big-O : O(log(n)) in each iteration input in getting half
const isPowerOfTwo = (n) => {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

console.log(isPowerOfTwo(1)); //true (2^0)
console.log(isPowerOfTwo(2)); //true (2^1)
console.log(isPowerOfTwo(5)); //false
console.log(isPowerOfTwo(16)); //true
console.log(isPowerOfTwo(64)); //true
console.log(isPowerOfTwo(65)); //false

/** Using Bitwise operator
explanations : 
    in binary a number which can be written as power of 2 always ends with 0 (except 1)

example :
1 -> 1
2-> 10
3 -> 100
4 -> 1000

In JS Bitwise operator are 1 if both numbers are 1 else 0
*/

// big-O : O(1)
const isPowerOfTwo_using_bitwise_operator = (n) => {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
};
