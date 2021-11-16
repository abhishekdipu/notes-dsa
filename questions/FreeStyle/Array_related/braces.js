/*
[({})] ->YES
[{(})] -> NO
*/

const isPairPresentInSecquence = (braces) => {
  let braceArr = braces.split("");
  let bracesStack = [];
  for (let brace of braceArr) {
    if (["{", "[", "("].includes(brace)) {
      bracesStack.push(brace);
    } else if (brace === "}") {
      if (bracesStack[bracesStack.length - 1] !== "{") {
        return "NO";
      } else bracesStack.pop();
    } else if (brace === "]") {
      if (bracesStack[bracesStack.length - 1] !== "[") {
        return "NO";
      } else bracesStack.pop();
    } else if (brace === ")") {
      if (bracesStack[bracesStack.length - 1] !== "(") {
        return "NO";
      } else bracesStack.pop();
    }
  }
  if (bracesStack.length !== 0) return "NO";

  return "YES";
};

console.log(isPairPresentInSecquence("[{(})]"));
console.log(isPairPresentInSecquence("[({})]"));
