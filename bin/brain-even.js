#!/usr/bin/env node

import readlineSync from 'readline-sync';

import {welcome, getRandomInt, question, get_answer, MAX_ROUNDS} from '../src/index.js'

function main() {
    const name = welcome()

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < MAX_ROUNDS; i++) {

        const number = getRandomInt(10000);

        question(number)

        const answer = get_answer();

        if (number % 2 == 0) {
            if (answer == "yes") {
                console.log("Correct!")
            } else {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`)
                console.log(`Let's try again, ${name}!`)
                return
            }
        } else {
            if (answer == "no") {
                console.log("Correct!")
            } else {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`)
                console.log(`Let's try again, ${name}!`)
                return
            }
        }
    }

    console.log(`Congratulations, ${name}!`)

}

main();



