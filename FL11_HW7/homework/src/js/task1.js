let email = prompt('Please enter your email to proceed!');
let firstNumber = 6;
let secondNumber = 5;
let pass;
if (email === '' || pass === '') {
  alert('Canceled');
} if (email === null || pass === null) {
  alert('Canceled');
} if (email !== null){
  while (email.length < firstNumber) {
    alert('I dont know any emails having name length less than 6 symbols');
    break;
  }
} if (email === 'user@gmail.com') {
   pass = prompt('enter your password');
} else if (email === 'admin@gmail.com'){
   pass = prompt('enter your password');
} else{
  alert('I don’t know you');
} if (email === 'admin@gmail.com' && pass === 'AdminPass') {
  alert('Welcome Admin');
} else if (email === 'user@gmail.com' && pass === 'UserPass') {
  alert('Welcome User');
} else if (email === 'admin@gmail.com' && pass !== 'AdminPass') {
  alert('Wrong password')
} else if (email === 'user@gmail.com' && pass !== 'UserPass') {
  alert('Wrong password')
} 

let newPrompt;
let enterAgain;

if (email === 'admin@gmail.com'|| email=== 'user@gmail.com') {
  if (confirm('Do you want to change your password?') === false) {
    alert('You have failed the change.')
  } else {
    let enterPass = prompt('Enter Old Password');
    if (enterPass === '' || enterPass === null) {
      alert('Canceled');
    } if (enterPass === pass) {
       newPrompt = prompt('Enter new password');
    } if (newPrompt.length < secondNumber) {
      alert('It’s too short password. Sorry.');
    } else {
       enterAgain = prompt('enter it again');
    } if (newPrompt !== enterAgain) {
      alert('You wrote the wrong password.');
    } else {
      alert('You have successfully changed your password.');
    }
  }
}