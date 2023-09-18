#!/usr/bin/env node

import {
  welcome, getRandomInt, question, getAnswer, MAX_ROUNDS, nod, correct, error,
} from '../src/index.js';

function main() {
  const name = welcome();

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const number1 = getRandomInt(100);

    const number2 = getRandomInt(100);

    question(`${number1} ${number2}!`);

    const answer = getAnswer();

    const result = nod(number1, number2);

    if (answer === result) {
      correct();
    } else {
      error(answer, result, name);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

main();
