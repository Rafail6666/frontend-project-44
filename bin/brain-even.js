#!/usr/bin/env node

import readlineSync from 'readline-sync';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function main() {
    console.log('Welcome to the Brain Games!')

    const name = readlineSync.question('May I have your name? ');

    console.log(`Hello, ${name}!`);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < 3; i++) {

        const number = getRandomInt(10000);

        console.log(`Question: ${number}!`)

        const answer = readlineSync.question('Your answer: ');

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



