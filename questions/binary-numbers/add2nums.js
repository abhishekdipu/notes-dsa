/*
https://leetcode.com/problems/add-binary/solutions/1017596/detail-explanation-easy-single-line-97-faster/

- Binary to decimal, eg change '110' to decimal 
    - 1st way
        console.log(parseInt('110', 2)); // 6
    
    - 2nd way
        console.log(BigInt('0b' + '110')); // 6n --> 
        - it'll be of type bigint, can store more till 2^53 -1, so we'll use this over parseInt
        

- Decimal to binary
    const num = 6;
    console.log(num.toString(2)); // 110
*/

var addBinary = function (a, b) {
  // using BigInt
  //  return (BigInt("0b"+a) + BigInt("0b"+b)).toString(2);

  //using string manipulation
  let i = 0;
  let carry = 0;
  let ans = '';

  while (i < a.length || i < b.length || carry !== 0) {
    // access elements from last and as i's string to parse to int

    let x = a[a.length - 1 - i] === '1' ? 1 : 0;
    let y = b[b.length - 1 - i] === '1' ? 1 : 0;

    let total = x + y + carry;
    ans = (total % 2).toString() + ans;
    carry = Math.floor(total / 2);

    i++;
  }
  return ans;
};

console.log('ans -->: ', addBinary('11', '1')); //100

// console.log('d', 3 / 2);
// console.log('m', 3 % 2);
