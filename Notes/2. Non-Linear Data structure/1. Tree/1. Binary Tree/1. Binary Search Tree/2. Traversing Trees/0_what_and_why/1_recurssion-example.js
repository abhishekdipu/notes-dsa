/* # Recurssion

- Eg. Factorial for a number
*/

// using loop
const factorialLoop = (n) => {
  let fact = 1;
  for (let i = n; i > 1; i--) {
    fact = fact * i;
  }
  return fact;
};
console.log(factorialLoop(4)); //24

// using Recurssion
const factorialRecurssion = (n) => {
  if (n == 1) return n;
  return n * factorialRecurssion(n - 1);
};
console.log(factorialRecurssion(4)); //24
