//unsolved
const isBalanaced = (str) => {
  let strArr = str.split("");
  let stack = [];
  let leftBrackets = ["(", "[", "{", "<"];
  let rightBrackets = [")", "]", "}", ">"];

  strArr.forEach((item) => {
    if (leftBrackets.includes(item)) {
      console.log("---");
      stack.push(item);
    }

    if (rightBrackets.includes(item)) {
      if (stack.length === 0) return false;

      let top = stack.pop();
      console.log(item, top);
      if (
        (item == ")" && top != "(") ||
        (item == "]" && top != "[") ||
        (item == "}" && top != "{") ||
        (item == ">" && top != "<")
      )
        return false;
    }
  });

  return stack.length === 0;
};

console.log(isBalanaced("({1 + 2)}}}"));
// console.log(isBalanaced("(1) + (2) "));
// console.log(isBalanaced("((1) + (2))"));
// console.log(isBalanaced("(1 + 2 "));
// console.log(isBalanaced(")1 + 2( "));
