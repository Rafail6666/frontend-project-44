import readlineSync from 'readline-sync';

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function welcome() {
    console.log('Welcome to the Brain Games!');

    const name = readlineSync.question('May I have your name? ');

    console.log(`Hello, ${name}!`);

    return name;
}

export function question(text){
    console.log(`Question: ${text}!`);
}

export function get_answer(){
    return readlineSync.question('Your answer: ');
}

export const MAX_ROUNDS = 3;