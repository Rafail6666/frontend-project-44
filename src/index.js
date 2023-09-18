import readlineSync from 'readline-sync';


export function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function welcome() {
    console.log('Welcome to the Brain Games!');

    const name = readlineSync.question('May I have your name? ');

    console.log(`Hello, ${name}!`);

    return name;
}

export function question(text) {
    console.log(`Question: ${text}`);
}

export function get_answer() {
    return readlineSync.question('Your answer: ');
}

export function nod(x, y) {
    let min;
    if (x < y) {
        min = x;
    } else {
        min = y;
    }

    for (let i = min; i > 0; i-=1) {
        if (x % i == 0 && y % i == 0) {
            return i;
        }
    }
}

export function simple(number){
    
    for(let i = 2; i < number/2; i++){
        if(number % i == 0){
            return false;
        }
    }
    return true;
}

export function correct() {
    console.log("Correct!");
}

export function error(answer, result, name) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`)
    console.log(`Let's try again, ${name}!`)
}
export const MAX_ROUNDS = 3;