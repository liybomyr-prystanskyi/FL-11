
let start;
let start2;
let userNumber = 8;
let maxTries = 3;
let num1 = 100;
let num2 = 50;
let num3 = 25;
let number2 = 2;
let number4 = 4;
let number1 = 1;
let number3 = 3;
let number8 = 8;
let enter1;
let enter2;
let enter3;
let formule = Math.round(Math.random() * (number8 - 0) + 0);
let total = 0;
start = confirm('Do you want to play a game?');
for (start; start < number3; start++) {
  if (start === false) {
    alert('You did not become a billionaire, but can.');
  } else if (start === true) {
    enter1 = prompt('Chose a roulette pocket number from 0 to number8 \nAttempts left:'
      + maxTries + '\rTotal price:' + total + '\rPossible price at current attempt:' + num1);
  } if (enter1 === formule) {
    total = total + num1;
    alert('Congratulation, you won! Your prize is:' + total);
  } else if (enter1 !== formule) {
    enter2 = prompt('Chose a roulette pocket number from 0 to number8 \rAttempts left:' +
      (maxTries - number1) + '\rTotal price:' + total + '\rPossible price at current attempt:' + num2);
  } if (num2 === formule) {
    total = total + num2;
    alert('Congratulation, you won! Your prize is:' + total + num2);
  } else if (num2 !== formule) {
    enter3 = prompt('Chose a roulette pocket number from 0 to number8' +
      '\rAttempts left:' + (maxTries - number2) +
      '\rTotal price:' + total + '\rPossible price at current attempt:' + num3);
  } if (enter3 === formule) {
    total = total + num3;
    alert('Congratulation, you won! Your prize is:' + total);
  } else if (enter1 !== formule && enter2 !== formule && enter3 !== formule) {
    alert('Thank you for your participation. Your prize is:' + total);
    start2 = confirm('Do you want to play again?');
    if (!start2) {
      alert('You did not become a billionaire, but can.');
    } else if (start) {
      maxTries = maxTries * number2;
      userNumber = userNumber + number4;
      num1 *= number2;
      num2 *= number2;
      num3 *= number2;
    }
  }
}

