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
  boxWidth: null,
  boxHeight: null,
  luminosity: null,
}

//TODO
//combine luminosity into color settings
const createBox = (getBox, getColor) => {

  getBox.text = chalk.hex(getColor)(getColor);
  getBox.hashtagChar = chalk.hex(getColor)(getBox.hashtagChar);

  let newBox;

  if((getBox.boxWidth && getBox.boxHeight) === null){
  const boxTopBottom = `${getBox.hashtagChar.repeat(getBox.topBottomWidth)}\n`.repeat(getBox.topBottomHeight);

  const boxMiddle = `${(getBox.hashtagChar.repeat(getBox.sideBorder)
  + defaultBox.spaceChar.repeat(defaultBox.topBottomWidth - 2 * defaultBox.sideBorder)
  + getBox.hashtagChar.repeat(getBox.sideBorder))}\n`;

  const boxText = `${(getBox.hashtagChar.repeat(getBox.sideBorder)
  + defaultBox.spaceChar.repeat(defaultBox.textSpace)
  + chalk.hex(getColor)(getColor)
  + defaultBox.spaceChar.repeat(defaultBox.textSpace)
  + getBox.hashtagChar.repeat(getBox.sideBorder))}\n`;

newBox = boxTopBottom + boxMiddle + boxText + boxMiddle + boxTopBottom;
  }
  else{
    newBox = `${getBox.hashtagChar.repeat(getBox.boxWidth)}\n`.repeat(getBox.boxHeight);
  }

console.log(chalk.hex(getColor)(newBox));
}

// TODO
// user can require luminosity
// luminosity setting go to hsl format
// combine hex and hsl formats before print
// luminosity range: 0-100
const threeInputs = (input1, input2, input3) => {
  if(input1.includes('x') && input1[2] === 'x' && input1.length === 5){
    defaultBox.boxWidth = input1.slice(0, 2);
    defaultBox.boxHeight = input1.slice(3, 5);

    //<WWxHH> + randomColor function
    if(input2 === undefined) {
    onlyRandomColor();
  }
  //<WWxHH> + <user color> function
  else if (parse(input2).hex){
    const hex = parse(input2);
  createBox(defaultBox, hex.hex)
  }
  }
    //2. if: <luminosity> + randomColor()
    //TODO
    //adds random number to luminosity parameter - WORKS
    //combine luminosity value to modify printed color
  else if (input1 === 'light' || input1 === 'dark') {
  if (input1 === 'light'){
        defaultBox.luminosity = randomLuminosity(1, 50)
      }
  else if (input1 === 'dark'){
        defaultBox.luminosity = randomLuminosity(51, 100);
      }
      onlyRandomColor();
    }
//TODO
      //3. if: WWxHH + <luminosity> + randomColor()
    //4. if: WWxHH + <luminosity> + <user color>


  // node index.js <color>
 else if (parse(input1).hex){
    const hex = parse(input1);
  createBox(defaultBox, hex.hex)
  }
  
  else {
    showAsk();
  }
}

//random luminosity function
const randomLuminosity = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

//random color function
const onlyRandomColor = () => {
  const newColor = randomColorFunction;
  createBox(defaultBox, newColor);
}

// ask/unknown command function
const askStyle = chalk.italic.yellow;
const askText = `Unknown command. Please use one of the following commands after 'node.js':
- <no input> prints box in a random color with its hex name inside,
- <color> prints box in specified color with its hex name inside,
- <WWxHH> prints box in specified size (eg. 02x20) in a random color,
- <ask> prints this instruction.`;

const showAsk = () => {
  console.log(askStyle(askText));
}

// node index.js <input>/<input>/<input>
  if (!userInput1)
    {
    onlyRandomColor()
    }
    else if (userInput1 === 'ask') {
      showAsk();
    }
    else{
      threeInputs(userInput1, userInput2, userInput3);
  };
