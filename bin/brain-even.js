#!/usr/bin/env node

import {
  welcome, getRandomInt, question, getAnswer, MAX_ROUNDS, correct, error,
} from '../src/index.js';

function main() {
  const name = welcome();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const number = getRandomInt(10000);

    question(`${number}!`);

    const answer = getAnswer();

    if (number % 2 === 0) {
      if (answer === 'yes') {
        correct();
      } else {
        error(answer, 'yes', name);
        return;
      }
    } else if (answer === 'no') {
      correct();
    } else {
      error(answer, 'no', name);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

main();
