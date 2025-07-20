/*
Logic : reverse the number and compare with original number
*/

const palindromeNumber = (n) => {
  //edge case
  if (typeof n !== 'number') throw new Error('not a valid input type');
  if (n < 0) return false;

  let rev = 0;
  let org = n;
  while (org > 0) {
    let rem = org % 10;
    // rev += rem;
    rev = rev * 10 + rem;
    org = Math.floor(org / 10);
  }

  //   rev = Number(rev);
  return rev === n;
};
console.log(palindromeNumber(121));
