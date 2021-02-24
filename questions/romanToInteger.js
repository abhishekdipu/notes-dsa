/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/

var romanToInt = function (s) {
  let nums = s.split("");
  let out = 0;
  for (let num of nums) {
    if (num === "I") out = out + 1;
    else if (num === "V") out = out + 5;
  }
};
