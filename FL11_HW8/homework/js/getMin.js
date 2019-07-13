function getMin() {
  let minArr = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (minArr > arguments[i]) {
      minArr = arguments[i];
    }
  }
  return minArr;
}
console.log(getMin(10, 5, 1));