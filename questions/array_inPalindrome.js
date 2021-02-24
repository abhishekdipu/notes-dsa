var isPalindrome = function (x) {
  if (x < -(2 ** 31) || x > 2 ** 31 - 1) return;
  let y = parseInt(x.toString().split("").reverse().join(""));
  //   console.log(y);
  if (x === y) return true;
  else return false;
};

console.log(isPalindrome(10));
