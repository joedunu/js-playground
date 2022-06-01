import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

/**
 * Function takes three arguments and passes back the sum of multiplications. 
 * 
 * First arguent passed in is multiplied by the thrid argument and if the answer is less than 
 * the second argument it call the same function recursively until the answer is greater than the second arguent passed in.
 * @param {number} factor - Initial nuber passed in
 * @param {number} target - Target for multiplication
 * @param {number} counter - counter for multiplication
 * @returns sum of multiplications as an integer
 */
const recursiveAdder = (factor, target, counter = 1) => {
  const multiplication = factor * counter;
  return multiplication <= target ? multiplication + recursiveAdder(factor, target, ++counter) : 0;
}

const main = async () => {
  // Read input from the command line
  const rl = readline.createInterface({ input, output });
  const target = parseInt(await rl.question('Enter your prefferd number to get the sum of multiplications: '));
  rl.close();

  // Call recursive adder function and print output to the command line
  const answer = recursiveAdder(3, target) + recursiveAdder(5, target);
  console.log(`Sum of multiplications is: ${answer}`);
};

main();
