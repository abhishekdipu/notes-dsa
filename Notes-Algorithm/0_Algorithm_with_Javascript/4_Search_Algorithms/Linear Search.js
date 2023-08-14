/** Linear search
Question : 
    Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

sample output : 
    arr = [-5, 2, 10, 4, 6], t = 10 -> Should return 2
    arr = [-5, 2, 10, 4, 6], t = 6 -> Should return 4
    arr = [-5, 2, 10, 4, 6], t = 20 -> Should return -1


Linear search pseudocode
    1. Start at the first element in the array and move towards the last.
    2. At each element though, check if the element is equal to the target element.
    3. If element found, return the index of the element
    4. If element not found, return -1
 */

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

console.log(linearSearch([-5, 2, 10, 4, 6], 10)); //2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)); //4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)); //-1
