/*
123 -> 321
-123 -> -321
return 0 output range Math.pow(2,31)

*/

const reverseInteger = (n) => {
  let originalNum = n;
  n = Math.abs(n);
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }

  const outputLimit = Math.pow(2, 31);
  if (rev > outputLimit) return 0;
  return originalNum < 0 ? -rev : rev;
};

console.log(reverseInteger(123)); // 321
console.log(reverseInteger(-123)); // -321
