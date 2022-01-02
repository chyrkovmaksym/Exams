// Increment all numbers in dictionary

const incNumbers = (dictionary) => {
  for (const key in dictionary) {
    if (typeof dictionary[key] === 'number') {
      dictionary[key] = dictionary[key] + 1;
    }
  }
  return dictionary;
};

const result = incNumbers({ a: 1, b: 2, c: 'hello', d: false });
console.log(result);
