/**
 * I/P : abhishek => abhisek
 *
 *
 * @param {string} str
 */
const removeDuplicates = (str) => {
  const nameSet = new Set();
  for (let char of str) {
    nameSet.add(char);
  }
  return Array.from(nameSet).join("");
};
console.log(removeDuplicates("abhishek")); //abhisek
