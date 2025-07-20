/**
 *
 * @param {string} str
 */
const first_repeating_char = (str) => {
  for (let char of str) {
    if (str.indexOf(char) !== str.lastIndexOf(char)) {
      return char;
    }
  }
  return "undefined";
};
console.log(first_repeating_char("abacdbae")); //a
console.log(first_repeating_char("abhishek")); //h
console.log(first_repeating_char("abcdef")); //undefined
