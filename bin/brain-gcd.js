#!/usr/bin/env node

import readlineSync from 'readline-sync';

import {welcome, getRandomInt, question, get_answer, MAX_ROUNDS, nod, correct, error} from '../src/index.js'

function main() {
    const name = welcome();

    console.log('Find the greatest common divisor of given numbers.');

    for (let i = 0; i < MAX_ROUNDS; i++) {

        const number1 = getRandomInt(100);

        const number2 = getRandomInt(100);

        question(`${number1} ${number2}!`);

        const answer = get_answer();

        let result = nod(number1, number2)

        if (answer == result) {
            correct();
        } else {
            error(answer, result, name);
            return
        }

    }

    console.log(`Congratulations, ${name}!`)

}

main();