/*Find the number of vowels in a string. Vowels in English are A, E, O,  U and I.
Input: “hello”
Output: 2
 */

const countVowel = (str) => {
  if (!str) return 0;

  const vowels = "aeiou";
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
};

console.log(countVowel("hello world")); //3
console.log(countVowel("hellO world")); //3
console.log(countVowel("  ")); //0
console.log(countVowel(null)); //0
console.log(countVowel(undefined)); //0
