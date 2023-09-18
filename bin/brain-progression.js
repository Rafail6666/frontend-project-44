#!/usr/bin/env node

import readlineSync from 'readline-sync';

import { welcome, getRandomInt, question, get_answer, MAX_ROUNDS, nod, correct, error } from '../src/index.js'

function main() {
    const name = welcome();

    console.log('What number is missing in the progression?');

    for (let i = 0; i < MAX_ROUNDS; i++) {

        const n = getRandomInt(11, 5);

        const x = getRandomInt(n);

        const p = getRandomInt(11, 1);

        let number1 = getRandomInt(11);

        let str = ``;

        let result;

        for (let i = 0; i < n; i++) {

            if (i == x) {

                str = `${str}.. `

                result = number1;

            } else {

                str = `${str}${number1} `

            }

            number1 = number1 + p;

        }

        question(str);

        const answer = get_answer();

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