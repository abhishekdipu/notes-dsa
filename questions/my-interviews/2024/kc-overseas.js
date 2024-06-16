console.log('hello world!');

const arr = [1, 2, [3, 4], [[5, 6], 7]];
const arr2 = [1, [2], [3, 4], [[[5, [6]]], 7]];

/**
 *
 * @param {Array} a
 */

// const wrap = (a) => {
//   const out = [];
//   const flat = (a) => {
//     for (let i = 0; i < a.length; i++) {
//       if (typeof a[i] === 'number') {
//         out.push(a[i]);
//       } else {
//         flat(a[i]);
//       }
//     }
//     return;
//   };

//   flat(a);
//   return out;
// };

const flat = (a) => {
  const out = [];
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] === 'number') {
      out.push(a[i]);
    } else {
      const res = flat(a[i]);
      out.push(...res);
    }
  }
  return out;
};

//   flat(a);
//   return out;

// const ans = flat(arr);
// console.log('ans :', ans);

// console.log(flat(arr2));

/*
3 =>
  *
 * *
* * *

4 

+++*
++*+*
+* * *
* * * *
*/

const printPascal = (n) => {
  for (let i = 1; i <= n; i++) {
    const space = n - i;
    const star = i;
    let str = '';
    for (let j = 0; j < space; j++) {
      str = str + ' ';
    }
    for (let k = 0; k < star; k++) {
      str = str + '* ';
    }
    console.log(str);
    // str = '';
  }
};
// printPascal(0);
// printPascal(1);
// printPascal(3);
// printPascal(5);

console.log('begins');

setTimeout(() => {
  console.log('setTimeout 1');
  Promise.resolve().then(() => {
    console.log('promise 1');
  });
}, 0);

new Promise(function (resolve, reject) {
  console.log('promise 2');
  setTimeout(function () {
    console.log('setTimeout 2');
    resolve('resolve 1');
  }, 0);
}).then((res) => {
  console.log('dot then 1');
  setTimeout(() => {
    console.log(res);
  }, 0);
});
/*
begins
promise 2
setTimeout 2
dot then 1
resolve 1
setTimeout 1
promise 1

begins
promise 2
setTimeout 1
promise 1
setTimeout 2
dot then 1
resolve 1
*/
