let userName = ''
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
const userQuestion = 'What do you want to do with  Magic Eight Ball?'
console.log('');
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (randomNumber) {
  case 0:
    console.log('It is certain');
    break;
  case 1:
    console.log('It is decidedly so');
    break;
  case 2:
    console.log('Reply hazy try again');
    break;
  case 3:
    console.log('Cannot predict now');
case 4:
console.log('Cannot predict now');
case 5:
console.log('Do not count on it');
case 6:
console.log('My sources say no');
case 7:
console.log('Outlook not so good');
default:
console.log('Signs point to yes');
}

