function hasEven(intArray) {
  let found = false;
  for (let i = 0; i < intArray.length; i++) {
    if (intArray[i] % 2 === 0) {
      found = true;
      break;
    }
  }

  return found;
}

console.log(hasEven([1, 3, 5, 2, 7]));

module.exports = hasEven;