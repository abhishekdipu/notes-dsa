/**
 * pow(2,3) = 8
 */

const powerOfNum = (num1, num2) => {
  if (num2 == 0) {
    return 1;
  }
  return num1 * powerOfNum(num1, num2 - 1);
};

console.log(powerOfNum(2, 3)); //8
console.log(powerOfNum(3, 3)); //27
console.log(powerOfNum(1, 0)); //1

/**
 
1
2 * powerOfNum(2, 0);  2*1 = 2
2 * powerOfNum(2, 1); 2*2 = 4
2 * powerOfNum(2, 2); 2 * 4 = 8

 */
