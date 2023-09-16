#!/usr/bin/env node

import readlineSync from 'readline-sync';

import {welcome, getRandomInt, question, get_answer, MAX_ROUNDS} from '../src/index.js'

function main() {
    const name = welcome();

    console.log('What is the result of the expression?');

    const operations = ['+', '-', '*']

    for (let i = 0; i < MAX_ROUNDS; i++) {

        const number1 = getRandomInt(10);

        const number2 = getRandomInt(10);

        const operationInt = getRandomInt(3);

        const operationStr = operations[operationInt]

        question(`${number1} ${operationStr} ${number2}`);

        const answer = get_answer();

        let result;

        if (operationStr == '+') {
            result = (number1 + number2)
        }    
        if (operationStr == '-') {
            result = (number1 - number2)
        }        
        if (operationStr == '*') {
            result = (number1 * number2)
        }            

        if (answer == result) {
            console.log("Correct!")
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`)
            console.log(`Let's try again, ${name}!`)
            return
        }

    }

    console.log(`Congratulations, ${name}!`)

}

main();