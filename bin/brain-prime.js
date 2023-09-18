#!/usr/bin/env node

import {
  welcome, getRandomInt, question, getAnswer, MAX_ROUNDS, correct, error, simple,
} from '../src/index.js';

function main() {
  const name = welcome();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const number = getRandomInt(1000);

    question(`${number}!`);

    const answer = toString(getAnswer());

    if (simple(number)) {
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
