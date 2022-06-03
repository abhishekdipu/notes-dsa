## space Complexity :

- space we need to allocate for our algorithm to give output.

```js
const numbers = [];
const printAll = (numbers) => {
  for (let number of numbers) {
    console.log(number);
  }
};
```

- here space complexity = O(1) : as only 'number' variable is taking space

```js
const numbers = [];
const printAll = (numbers) => {
  const myNumbers = [...numbers];
};
```

- here space complexity = O(n) : as we have created another array with same size an input array
