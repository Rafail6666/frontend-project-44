import readlineSync from 'readline-sync';

export const sayname = () => {
    const name = readlineSync.question('May I have your name? ');

    console.log(`Hello, ${name}!`)
}
