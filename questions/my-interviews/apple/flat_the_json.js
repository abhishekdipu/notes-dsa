/**
 * YT Video Sol : https://www.youtube.com/watch?v=awk-M-JSVas
 * @param {Object} obj
 */
const flat = (obj) => {
  const res = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      const temp = flat(obj[key]);
      for (let key2 in temp) {
        res[key + '/' + key2] = temp[key2];
      }
    } else {
      res[key] = obj[key];
    }
  }
  return res;
};

const input = {
  name: 'abhi',
  age: 25,
  address: {
    city: 'dhanbad',
    state: 'jharkhand',
    temples: ['devghar', 'bokaro'],
    history: {
      king: 'raja',
      state: 'jharia',
    },
  },
};
console.log(flat(input));
