/**
 * I/P :  abacdbae =>
 * Ans :  non_repeating_char = c, d, e
 *        first_non_repeating_char = c (answer)
 *
 * I/P : abhishek => a
 */

/**
 *
 * @param {string} str
 */
const first_non_repeating_char = (str) => {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return "undefined";
};
console.log(first_non_repeating_char("abacdbae")); //c
console.log(first_non_repeating_char("abhishek")); //a
console.log(first_non_repeating_char("abacdbaecde")); //undefined
