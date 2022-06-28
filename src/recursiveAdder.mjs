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
 * @param {array} multiplications - multiplications already added together
 * @returns sum of multiplications as an integer
 */
const recursiveAdder = (factor, target, counter = 1, multiplications) => {
  const multiplication = factor * counter;

  if (multiplication <= target) {
    const tmp = recursiveAdder(factor, target, ++counter, multiplications);
    if (multiplications.find((mult) => multiplication === mult) === undefined) {
      multiplications.push(multiplication);
      return {
        sum: multiplication + tmp.sum,
        multiplications: tmp.multiplications
      }
    } else {
      return tmp;
    }
  } else {
    return { sum: 0, multiplications };
  }
}

const main = async () => {
  // Read input from the command line
  const rl = readline.createInterface({ input, output });
  const target = parseInt(await rl.question('Enter your prefferd number to get the sum of multiplications: '));
  let factorials = await rl.question('Enter the factorials to get the sum of multiplications sparated by spaces: ');
  rl.close();

  factorials = factorials.split(' ').map(item => parseInt(item));

  const multiplications = [];
  console.log(`Factorials: ${factorials}, Target: ${target}`);

  // Call recursive adder function and print output to the command line
  let answer = factorials.map(item => recursiveAdder(item, target, 1, multiplications));
  answer = answer.reduce((prev, cur) => {
    console.log('PREV', prev.sum);
    console.log('CUR', cur.sum);
    return { sum: prev.sum + cur.sum, multiplications };
  });
  console.log('Sum of multiplications is: ', answer);
};

main();
