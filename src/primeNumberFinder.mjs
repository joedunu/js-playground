import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const getPrimeNumbers = (number) => {
    for (var i = 3; i < number; i++) {
        console.log(`Checking ${i}`);
        if (number % i++ == 0) {
            console.log(`Not a prime number because ${number} is devisible by ${i - 1}`);
            return false;
        }
    }

    return true;
}

const main = async () => {

    // Read input from the command line
    const rl = readline.createInterface({ input, output });
    const number = parseInt(await rl.question('Enter a number to check if it is a prime number: '));
    rl.close();

    console.log(getPrimeNumbers(number))
}

main();
