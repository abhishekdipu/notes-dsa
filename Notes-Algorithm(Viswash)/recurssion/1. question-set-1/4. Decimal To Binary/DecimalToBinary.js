const decimalToBinary = (num, result = "") => {
  if (num === 0) return result;

  result = (num % 2) + result;
  return decimalToBinary(Math.floor(num / 2), result);
};

const input = 233;
const ans = decimalToBinary(input, ""); ////11101001
console.log(ans);
