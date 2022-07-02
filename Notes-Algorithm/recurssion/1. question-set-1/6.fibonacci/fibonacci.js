//0,1,1,2,3,5,8,13,21,34,55,89,144, ...
// const fibonacci = (n) => {
//   if (n === 0 || n === 1) return n;

//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// const input = 4;
// const ans = fibonacci(input);

// console.log(ans);

const fibonacci = (n, arr = []) => {
  if (n === 0 || n === 1) return n;

  return [...(fibonacci(n - 1, arr) + fibonacci(n - 2, arr))];
};

const input = 4;
const ans = fibonacci(input, []);

console.log(ans);
