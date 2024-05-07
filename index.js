import { argv } from 'node:process';

import chalk from 'chalk';
import randomColor from 'randomcolor';

// taking input from user
const hueFromUser = argv[2];
const luminosityFromUser = argv[3];

const ask = `Please type color name and luminosity after 'node index.js'`

let fontColor;
if (!hueFromUser && !luminosityFromUser) {
  fontColor = randomColor();
} if (hueFromUser || luminosityFromUser === 'ask') {
console.log(ask)
}

console.log(chalk.hex(fontColor)('test'));