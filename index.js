import { argv } from 'node:process';

import chalk from 'chalk';
import parse from 'parse-color';
import randomColor from 'randomcolor';

let randomColorFunction = randomColor();

const userInput1 = argv[2];
const userInput2 = argv[3];
const userInput3 = argv[4];

const defaultBox = {
  spaceChar: ' ',
  text: '',
  color: '',
  hashtagChar: '#',
  topBottomWidth: 31,
  topBottomHeight: 3,
  sideBorder: 5,
  textSpace: 7,
}

const createBox = (getBox, getColor) => {

    getBox.text = chalk.hex(getColor)(getColor);

  getBox.hashtagChar = chalk.hex(getColor)(getBox.hashtagChar);

  const boxTopBottom = `${getBox.hashtagChar.repeat(getBox.topBottomWidth)}\n`.repeat(getBox.topBottomHeight);

  const boxMiddle = `${(getBox.hashtagChar.repeat(getBox.sideBorder)
  + defaultBox.spaceChar.repeat(defaultBox.topBottomWidth - 2 * defaultBox.sideBorder)
  + getBox.hashtagChar.repeat(getBox.sideBorder))}\n`;

  const boxText = `${(getBox.hashtagChar.repeat(getBox.sideBorder)
  + defaultBox.spaceChar.repeat(defaultBox.textSpace)
  + chalk.hex(getColor)(getColor)
  + defaultBox.spaceChar.repeat(defaultBox.textSpace)
  + getBox.hashtagChar.repeat(getBox.sideBorder))}\n`;

const newBox = boxTopBottom + boxMiddle + boxText + boxMiddle + boxTopBottom;
console.log(chalk.hex(getColor)(newBox));
}

// TODO
// later add WWxHH and lum
const oneInput = (input) => {
  if(parse(input).hex === undefined) {
    showAsk();
  }
  else{
    const hex = parse(input);
createBox(defaultBox, hex.hex)
  }
}

const twoInputs = (input1, input2) => {

}

const threeInputs = (input1, input2, input3) => {
}

// node index.js

const onlyRandomColor = () => {
  const newColor = randomColorFunction;
  createBox(defaultBox, newColor);
}

// node index.js ask

const askStyle = chalk.italic.yellow;
const askText = `Please type color name and/or luminosity after 'node index.js'!`;

const showAsk = () => {
  console.log(askStyle(askText));
}

// node index.js <color>
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