import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

let count = 1;
let randomNumber = Math.floor(Math.random() * 100);
let evenRandom = (randomNumber) => (randomNumber % 2 === 0? 'yes': 'no');

console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log(`Question: ${randomNumber}`);
export const answer = readlineSync.question('Your answer: ');

const check = (answer) => {
  if (evenRandom(randomNumber) !== answer) {
    return `'"yes" is wrong answer ;(. Correct answer was "no".\nLet\'s try again, ${userName}!'`;
  } else {
    return "Correct!";
  }
};
console.log(check(answer));


