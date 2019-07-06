let a = parseFloat(prompt('Enter A'));
let b = parseFloat(prompt('Enter B'));
let c = parseFloat(prompt('Enter C'));

if (a + b > c && c + b > b && b + c > a) {
  if (a === b & b === c & c === a) {
    console.log('Equivalent triangle')
  } else if (a === b || b === c || c === a) {
    console.log('Isosceles triangle')
  } else {
    console.log('Normal triangle')
  }
} else {
  console.log('Triangle Doesnt Exist')
}