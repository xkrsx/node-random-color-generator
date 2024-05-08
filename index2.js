import { argv } from 'node:process';

import chalk from 'chalk';
import parse from 'parse-color';
import randomColor from 'randomcolor';

const userInput1 = argv[2];
const userInput2 = argv[3];
const userInput3 = argv[4];

let color = randomColor();

const defaultBox = {
  spaceChar: ' ',
  hashtagChar: '#',
  topBottomWidth: 31,
  topBottomHeight: 3,
  sideBorder: 5,
  textSpace: 7,
}

const createBox = (defaultBox) => {
  defaultBox.text = chalk.hex(color)(color);

  defaultBox.hashtagChar = chalk.hex(defaultBox.color)('#');

  const boxTopBottom = `${defaultBox.hashtagChar.repeat(defaultBox.topBottomWidth)}\n`.repeat(defaultBox.topBottomHeight);

  const boxMiddle = `${(defaultBox.hashtagChar.repeat(defaultBox.sideBorder)
  + defaultBox.spaceChar.repeat(defaultBox.topBottomWidth - 2 * defaultBox.sideBorder)
  + defaultBox.hashtagChar.repeat(defaultBox.sideBorder))}\n`;

  const boxText = `${(defaultBox.hashtagChar.repeat(defaultBox.sideBorder)
  + defaultBox.spaceChar.repeat(defaultBox.textSpace)
  + chalk.hex(color)(color)
  + defaultBox.spaceChar.repeat(defaultBox.textSpace)
  + defaultBox.hashtagChar.repeat(defaultBox.sideBorder))}\n`;

const box = boxTopBottom + boxMiddle + boxText + boxMiddle + boxTopBottom;
console.log(chalk.hex(color)(box));
}

// node index.js

const onlyRandomColor = () => {
  defaultBox.topBottomHeight = 3;
  defaultBox.color = color;
  createBox(defaultBox);
}

// node index.js ask

const askStyle = chalk.italic.yellow;
const askText = `Please type color name and/or luminosity after 'node index.js'!`;

const showAsk = () => {
  console.log(askStyle(askText));
}

// TODO
// fix color name in the box
// later add WWxHH and lum
const oneInput = (input) => {
  if(parse(input).hex === undefined) {
    showAsk();
  }
  else{
    const hex = parse(input);
defaultBox.color = hex.hex;
defaultBox.text = chalk.hex(hex.hex)(hex.hex);
createBox(defaultBox)
  }
}

const twoInputs = (input1, input2) => {

}

const threeInputs = (input1, input2, input3) => {
}

// reading user inputs
  if (!userInput1)
    {
    onlyRandomColor()
    }
    else if (userInput1 === 'ask') {
      showAsk();
    }

    else{
    oneInput(userInput1);
  
  }

// oneInput(userInput1)