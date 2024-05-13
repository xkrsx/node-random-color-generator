import { argv } from 'node:process';

import chalk from 'chalk';
import parse from 'parse-color';
import randomColor from 'randomcolor';

let randomColorFunction = randomColor();

const userInput1 = argv[2];
const userInput2 = argv[3];
const userInput3 = argv[4];

const defaultBox = {
  topBottomWidth: 31,
  topBottomHeight: 3,
  boxWidth: null,
  boxHeight: null,
  luminosity: null,
  sideBorder: 5,
  textSpace: 7,
  spaceChar: ' ',
  hashtagChar: '#',
  text: null,
}

//TODO
//combine luminosity into color settings
const createBox = (getBox, getColor, luminosity) => {

  getBox.text = chalk.hex(getColor)(defaultBox.text);
  getBox.hashtagChar = chalk.hex(getColor)(getBox.hashtagChar);

  let newBox;

  if((getBox.boxWidth && getBox.boxHeight) === null){
  const boxTopBottom = `${getBox.hashtagChar.repeat(getBox.topBottomWidth)}\n`.repeat(getBox.topBottomHeight);

  const boxMiddle = `${(getBox.hashtagChar.repeat(getBox.sideBorder)
  + defaultBox.spaceChar.repeat(defaultBox.topBottomWidth - 2 * defaultBox.sideBorder)
  + getBox.hashtagChar.repeat(getBox.sideBorder))}\n`;

  const boxText = `${(getBox.hashtagChar.repeat(getBox.sideBorder)
  + defaultBox.spaceChar.repeat(defaultBox.textSpace)
  + chalk.hex(getColor)(defaultBox.text)
  + defaultBox.spaceChar.repeat(defaultBox.textSpace)
  + getBox.hashtagChar.repeat(getBox.sideBorder))}\n`;

newBox = boxTopBottom + boxMiddle + boxText + boxMiddle + boxTopBottom + `\nLuminosity: ${luminosity}`;
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
      randomColorBox();
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
  else if (input1 === 'light' || input1 === 'dark' || input1 === 'bright') {
    let randomColorUserLuminosity = randomColor({luminosity: input1})
    defaultBox.luminosity = input1;
    defaultBox.text = `${randomColorUserLuminosity}`;
    createBox(defaultBox, randomColorUserLuminosity, defaultBox.luminosity);
    console.log(defaultBox);

  }

// let newColorAndLuminosity = randomColorFunction;
// let minLuminosity;
// let maxLuminosity;

//   if (input1 === 'light'){
//       minLuminosity = 1;
//       maxLuminosity = 50;
//       // defaultBox.luminosity = randomLuminosity(1, 50);
//       // defaultBox.text = `Luminosity: ${defaultBox.luminosity}`;
//       // createBox(defaultBox, newColorAndLuminosity);
//       }
//   else if (input1 === 'dark'){
//     minLuminosity = 51;
//     maxLuminosity = 100;
//       // defaultBox.text = `Luminosity: ${defaultBox.luminosity}`;
//       // createBox(defaultBox, newColorAndLuminosity);
//       }

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
// const randomLuminosity = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

//random color function
const randomColorBox = () => {
  createBox(defaultBox, randomColorFunction);
}

// ask/unknown command function
const askStyle = chalk.italic.yellow;
const askText = `Unknown command. Please use one of the following commands after 'node.js':
- <no input> prints box in a random color with its hex name inside,
- <color> prints box in specified color with its hex name inside,
- <WWxHH> prints box in specified size (eg. 02x20) in a random color,
- <light/dark/bright> prints box in a random color in a specified luminosity with its hex name inside,
- <ask> prints this instruction.`;

const showAsk = () => {
  console.log(askStyle(askText));
}

// node index.js <input>/<input>/<input>
  if (!userInput1)
    {
      randomColorBox()
    }
    else if (userInput1 === 'ask') {
      showAsk();
    }
    else{
      threeInputs(userInput1, userInput2, userInput3);
  };
