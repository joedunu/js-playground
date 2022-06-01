import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

function recursiveAdder(target) {
  console.log(`Target number is: ${target}`);
}

const main = async () => {
  const rl = readline.createInterface({ input, output });

  const target = await rl.question('Enter your prefferd number to get the sum of multiplications: ');
  rl.close();
  recursiveAdder(target);
};

main();
