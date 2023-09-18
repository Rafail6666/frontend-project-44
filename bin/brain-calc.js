#!/usr/bin/env node

import {
  welcome, getRandomInt, question, getAnswer, MAX_ROUNDS, correct, error,
} from '../src/index.js';

function main() {
  const name = welcome();

  console.log('What is the result of the expression?');

  const operations = ['+', '-', '*'];

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const number1 = getRandomInt(10);

    const number2 = getRandomInt(10);

    const operationInt = getRandomInt(3);

    const operationStr = operations[operationInt];

    question(`${number1} ${operationStr} ${number2}!`);

    const answer = getAnswer();

    let result;

    if (operationStr === '+') {
      result = (number1 + number2);
    }
    if (operationStr === '-') {
      result = (number1 - number2);
    }
    if (operationStr === '*') {
      result = (number1 * number2);
    }

    if (typeof answer === 'string' && toString(answer) === toString(result)) {
      correct();
    } else {
      error(answer, result, name);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

main();
