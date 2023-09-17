/*
Remove duplicate characters in a string.
Input: “Hellooo!!”
Output: “Helo!”
*/

const removeDuplicate = (str) => {
  if (!str) return null;
  const memo = [];
  let output = "";
  for (let char of str) {
    if (!memo.includes(char)) {
      memo.push(char);
      output += char;
    }
  }
  return output;
};

//using set
const removeDuplicate1 = (str) => {
  if (!str) return null;
  const strWithUniqueChars = new Set(str);
  return [...strWithUniqueChars].join("");
};

console.log(removeDuplicate1("Hellooo!!")); //Helo!
console.log(removeDuplicate(null)); //null
console.log(removeDuplicate("    ")); //null
