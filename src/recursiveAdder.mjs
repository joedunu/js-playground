import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const recursiveAdder = (number, target, count = 1) => {
  const multiplication = number * count++;
  return multiplication <= target ? multiplication + recursiveAdder(number, target, count) : 0;
}

const main = async () => {
  const rl = readline.createInterface({ input, output });

  const target = parseInt(await rl.question('Enter your prefferd number to get the sum of multiplications: '));
  rl.close();
  const answer = recursiveAdder(3, target) + recursiveAdder(5, target);
  console.log(`Sum of multiplications is: ${answer}`);
};

main();
