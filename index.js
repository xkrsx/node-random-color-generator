import { argv } from 'node:process';

import chalk from 'chalk';
import randomColor from 'randomcolor';

const hueFromUser = argv[2];
const luminosityFromUser = argv[3];

const askStyle = chalk.italic.yellow;
const askText = `Please type color name and luminosity after 'node index.js'!`;

const boxWidth = 31;
const boxSides = 5;
const boxFrame = 3;
const boxSpace = boxWidth - 2 * boxSides;

const generateFontColor = (userInput, userInput2 ) => {

  let fontColor;
let box;

if (!userInput && !userInput2) {
  fontColor = randomColor();
  
}
 if (userInput || userInput2 === 'ask') {
// console.log(askStyle(askText));
}
// if (userInput && !userInput2) {
//   const createUserColorBox = (userInput) => {
//     fontColor = randomColor({hue: userInput})
//    console.log(chalk.hex(fontColor)(box))
//   }
//   createUserColorBox(hueFromUser)
// }
// if (!userInput && userInput2) {
//   const createUserColorBox = (userInput2) => {
//     fontColor = randomColor({luminosity: userInput})
//    console.log(chalk.hex(fontColor)(box))
//   }
//   createUserColorBox(luminosityFromUser)
// }
const colorfulHashtag = chalk.hex(fontColor)('#');
const boxSingleSpace = ' ';
const boxTopBottom = `${colorfulHashtag.repeat(boxWidth)}\n`.repeat(boxFrame);

const boxSide = `${(colorfulHashtag.repeat(boxSides)
  + boxSingleSpace.repeat(boxSpace)
  + colorfulHashtag.repeat(boxSides))}\n`;

const boxText = `${(colorfulHashtag.repeat(boxSides)
  + boxSingleSpace.repeat((boxSpace - fontColor.length) / 2)
  + chalk.hex(fontColor)(fontColor)
  + boxSingleSpace.repeat((boxSpace - fontColor.length) / 2)
  + colorfulHashtag.repeat(boxSides))}\n`;

box = boxTopBottom + boxSide + boxText + boxSide + boxTopBottom;
console.log(chalk.hex(fontColor)(box));
}
generateFontColor(hueFromUser, luminosityFromUser);



