/*
 *
 **
 ***
 ****
 *****
 */

const printPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < i + 1; j++) {
      str += '*';
    }
    console.log(str);
  }
};
// printPattern(5);

/*
1
12
123
1234
12345
 */

const printPattern2 = (n) => {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < i + 1; j++) {
      str += j + 1;
    }
    console.log(str);
  }
};
// printPattern2(5);

/*
1
22
333
4444
55555
*/

const printPattern3 = (n) => {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < i + 1; j++) {
      str += i + 1;
    }
    console.log(str);
  }
};
// printPattern3(5);

/*
12345
1234
123
12
1
*/

const printPattern4 = (n) => {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n - i; j++) {
      str += j + 1;
    }
    console.log(str);
  }
};
// printPattern4(5);

/*
 *
 **
 ***
 ****
 *****
 */

const printPattern5 = (n) => {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n - i; j++) {
      str += ' ';
    }
    for (let k = 0; k < i + 1; k++) {
      str += '*';
    }
    console.log(str);
  }
};
// printPattern5(5);

/*
1
10
1010
10101
101010
*/

const printPattern6 = (n) => {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < i + 1; j++) {
      str += j % 2 ? 0 : 1;
      // console.log({i, j, str});
    }
    console.log(str);
  }
};

const printPattern6_alt = (n) => {
  for (let i = 0; i < n; i++) {
    let toggle = 1;
    let str = '';
    for (let j = 0; j < i + 1; j++) {
      str += toggle;
      toggle = toggle == 1 ? 0 : 1;
    }
    console.log(str);
  }
};
// printPattern6(5);

/*
1
01
010
1010
10101
*/

const printPattern7 = (n) => {
  let toggle = 1;
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < i + 1; j++) {
      str += toggle;
      toggle = toggle == 1 ? 0 : 1;
    }
    console.log(str);
  }
};
printPattern7(5);
