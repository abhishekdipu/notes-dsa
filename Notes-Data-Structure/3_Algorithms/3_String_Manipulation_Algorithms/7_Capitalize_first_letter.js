/*
Capitalize the first letter of each word in a sentence. Also, remove any
extra spaces between words.
Input: “trees are beautiful”
Output: “Trees Are Beautiful”

Input: “ trees   are      beautiful ”
Output: “Trees Are Beautiful”
*/

const capitalizeFirstLetter = (sentence) => {
  let words = sentence.split(" ").filter((word) => word);
  let PascalCased = words.map(
    (word) => word[0].toUpperCase() + word.substring(1)
  );
  return PascalCased.join(" ");
};

console.log(capitalizeFirstLetter("trees are beautiful")); //Trees Are Beautiful
console.log(capitalizeFirstLetter(" trees   are      beautiful ")); //Trees Are Beautiful
