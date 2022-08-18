/*
Reverse the order of words in a sentence.
Input: “Trees are beautiful”
Output: “beautiful are Trees”
*/

const reverseSentence = (str) => {
  if (!str) return "";
  return str.trim().split(" ").reverse().join(" ");
};

console.log(reverseSentence("Trees are beautiful")); //beautiful are Trees
console.log(reverseSentence("   Trees are beautiful   ")); //beautiful are Trees
console.log(reverseSentence(" ")); //beautiful are Trees
console.log(reverseSentence(null)); //''
