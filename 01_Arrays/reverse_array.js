const numbers = [2, 3, 4, 5, 6];

//js method
//console.log(numbers.reverse()); //[ 6, 5, 4, 3, 2 ]

const myReverse = (nums) => {
  let newArray = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    newArray.push(nums[i]);
  }
  return newArray;
};

console.log(myReverse(numbers)); //[ 6, 5, 4, 3, 2 ]

//without using another array
//1st ka last me vejo and last ka 1st me
const myReverse2 = (arr) => {
  let count = 0;
  let size = arr.length;
  while (count <= arr.length / 2) {
    let temp = arr[count];
    arr[count] = arr[size - 1];
    arr[size - 1] = temp;
    count++;
    size--;
  }
  return arr;
};
console.log(myReverse2(numbers));
