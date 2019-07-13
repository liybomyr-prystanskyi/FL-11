function plusNumber(number) {
  return number + 1;
}
function pipe(num, ...args) {
  let endResult = num;
  for (let check = 0; check < args.length; check++) {
    endResult = args[check](endResult);
  }
  return endResult;
}
console.log(pipe(1, plusNumber));