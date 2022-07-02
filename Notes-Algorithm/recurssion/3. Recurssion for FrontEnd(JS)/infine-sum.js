/**
sum(a)(b)(c)(d)....() => a+b+c+d...
eg. sum(1)(2)(3)() => 6
 */

const sum = (a) => {
  return (b) => {
    if (b) {
      return sum(a + b);
    } else return a;
  };
};

//one line solution
// const sum = (a) => (b) => b ? sum(a + b) : a;

console.log(sum(1)(2)(3)()); //6
console.log(sum(1)(2)(3)(4)(5)()); //15
