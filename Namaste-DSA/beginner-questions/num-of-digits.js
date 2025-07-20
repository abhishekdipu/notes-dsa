const digitCount = (n) => {
  // edge cases
  if (typeof n !== 'number') return undefined;
  if (n === 0) return 1;
  n = Math.abs(n); // useful for -ve numbers

  // solution
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
};

console.log(digitCount(259)); //3
console.log(digitCount('abc')); //undefined
console.log(digitCount(0)); //1
console.log(digitCount(-259)); //3
