/**
 * (1 + 2) => true
 * (1) + (2) => true
 * ((1) + (2)) => true
 * ((1 + 2)) => true
 * (1 + 2 => false
 * ((1 + 2) => false
 * )1 + 2( => false
 */

const isBalanced = (str) => {
  let strArr = str.split("");
  let stack = [];
  // let leftBracket = ["(", "[", "{", "<"];
  // let rightBracket = [")", "]", "}", ">"];

  strArr.forEach((item) => {
    if (item == "(") stack.push(item);

    if (item == ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  });
  //   console.log(stack);
  return stack.length === 0;
};

console.log(isBalanced("(1 + 2)"));
console.log(isBalanced("(1) + (2) "));
console.log(isBalanced("((1) + (2))"));
console.log(isBalanced("((1) + (2))"));
console.log(isBalanced("(1 + 2 "));
console.log(isBalanced(")1 + 2( "));
