const sumOfNNumbers = (n) => {
  if (n === 0) return 0;
  return sumOfNNumbers(n - 1) + n;
};

const input = 10;
const ans = sumOfNNumbers(input);
console.log(ans); //55
