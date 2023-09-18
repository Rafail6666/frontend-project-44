#!/usr/bin/env node

import readlineSync from 'readline-sync';

import { welcome, getRandomInt, question, get_answer, MAX_ROUNDS, correct, error, simple} from '../src/index.js'

function main() {
    const name = welcome();

    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    for (let i = 0; i < MAX_ROUNDS; i++) {

        const number = getRandomInt(1000);

        question(number)

        const answer = get_answer();

        if (simple(number)) {
            if (answer == "yes") {
                correct();
            } else {
                error(answer, "yes", name);
                return
            }
        } else {
            if (answer == "no") {
                correct();
            } else {
                error(answer, "no", name);
                return
            }
        }
    }
    console.log(`Congratulations, ${name}!`)
}

main();