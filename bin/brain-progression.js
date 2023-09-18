#!/usr/bin/env node

import {
  welcome, getRandomInt, question, getAnswer, MAX_ROUNDS, correct, error,
} from '../src/index.js';

function main() {
  const name = welcome();

  console.log('What number is missing in the progression?');

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const n = getRandomInt(11, 5);

    const x = getRandomInt(n);

    const p = getRandomInt(11, 1);

    let number1 = getRandomInt(11);

    let str = '';

    let result;

    for (let j = 0; j < n; j += 1) {
      if (j === x) {
        str = `${str}.. `;

        result = number1;
      } else {
        str = `${str}${number1} `;
      }

      number1 += p;
    }

    question(str);

    const answer = getAnswer();

    try {
      if (toString(answer) === toString(result)) {
        correct();
      } else {
        error(answer, result, name);
        return;
      }
    } catch {
      error(answer, result, name);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

main();
