// I/P : 7 => O/P : 1,2,3,4,5,6,7
// const print = (n) => {
//   if (n == 1) {
//      console.log(n);
// return
//   }

//   print(n - 1);
//   console.log(n);
// };

// print(3);

/**
3 =>
1
print(1) : 1
print(2) 

*/

// I/P : 7 => O/P : 7,6,5,4,3,2,1
const print = (n) => {
  if (n == 1) {
    console.log(n);
    return;
  }

  console.log(n);
  print(n - 1);
};

print(7);

// const return1ToN = (n) => {
//   if (n == 1) {
//     return n;
//   }
// };
