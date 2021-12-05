const insertInOrder = (item) => {
  item = parseInt(item);
  let arr = [1, 3, 5, 7];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (item < arr[i]) {
      arr[i + 1] = arr[i];
    } else {
      arr[i + 1] = item;
      break;
    }
  }

  console.log(arr);
};

insertInOrder(9);
insertInOrder(2);
insertInOrder(6);
insertInOrder(3);
