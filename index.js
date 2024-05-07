import { argv } from 'node:process';

import chalk from 'chalk';
import colors from 'color-name';
import colorString from 'color-string';
import randomColor from 'randomcolor';

const hueFromUser = argv[2];
const luminosityFromUser = argv[3];

const askStyle = chalk.italic.yellow;
const askText = `Please type color name and luminosity after 'node index.js'!`;

let fontColor;
const boxWidth = 31;
const boxSides = 5;
const boxFrame = 3;
const boxSpace = boxWidth - 2 * boxSides;
fontColor = randomColor();

const colorfulHashtag = chalk.hex(fontColor)('#');
const boxSingleSpace = ' ';
const boxTopBottom = `${colorfulHashtag.repeat(boxWidth)}\n`.repeat(boxFrame);

const boxSide = `${(colorfulHashtag.repeat(boxSides)
  + boxSingleSpace.repeat(boxSpace)
  + colorfulHashtag.repeat(boxSides))}\n`;

const boxText = `${(colorfulHashtag.repeat(boxSides)
  + boxSingleSpace.repeat((boxSpace - fontColor.length) / 2)
  + fontColor
  + boxSingleSpace.repeat((boxSpace - fontColor.length) / 2)
  + colorfulHashtag.repeat(boxSides))}\n`;

const box = boxTopBottom + boxSide + boxText + boxSide + boxTopBottom;

if (!hueFromUser && !luminosityFromUser) {
  console.log(chalk.hex(fontColor)(box));
}
 else if (hueFromUser || luminosityFromUser === 'ask') {
console.log(askStyle(askText));
}
//  else if {hueFromUser

  // console.log(chalk.hex(colors.hueFromUser)('test'));

//  }

const test = `${colors}.${hueFromUser}`;
console.log(colorString.to.hex(test));