const decimalToBinaryUsingLoop = (num) => {
  let binary = "";
  let stack = [];

  while (num !== 0) {
    let rem = num % 2;
    stack.push(rem);
    num = Math.floor(num / 2);
  }

  while (stack.length) {
    binary = binary + stack.pop();
  }
  return binary;
};

console.log(decimalToBinaryUsingLoop(233)); //11101001
