/*
input : "{A3}{B2}{C2}'
output : "AAABBCC"

*/

/**
 *
 * @param {string} input
 */
const flattenString = (input) => {
  let char = '';
  let count = 0;
  let output = '';
  const arr = input.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '{' && arr[i] !== '}') {
      char = arr[i];
      count = Number(arr[i + 1]);
      i++;
      for (let j = 0; j < count; j++) {
        output += char;
      }
    }
  }
  return output;
};

console.log('output-->', flattenString('{A3}{B2}{C2}'));
