import { argv } from 'node:process';
import chalk from 'chalk';
import parse from 'parse-color';
import randomColor from 'randomcolor';

const randomColorFunction = randomColor();

const userInput1 = argv[2];
const userInput2 = argv[3];
const userInput3 = argv[4];

const defaultBox = {
  topBottomWidth: 31,
  topBottomHeight: 3,
  boxWidth: null,
  boxHeight: null,
  luminosity: '',
  sideBorder: 5,
  textSpace: 7,
  spaceChar: ' ',
  hashtagChar: '#',
  text: null,
  hsl: null,
};

// ask/unknown command function
const commandStyle = chalk.italic.yellow;
const askText = `Unknown command. Please use one of the following commands after 'node index.js':
- <no input> prints a default size box in a random color and its hex code inside,
- <color> prints a default box in a specified color and its hex code inside,
- <light/dark/bright> prints box in a random color in a specified luminosity with its hex code inside and luminosity input underneath,
- <WWxHH> prints a box of specified size (eg. 02x20) in a random color,
- <ask> prints a list of possible commands,
- <combine> prints a list of possible command combinations.`;

const combineText = `List of possible combined commands, following after 'node index.js':
- <light/dark/bright> <color> prints box in a specified color with specified luminosity with its hex code inside and luminosity input underneath,
- <WWxHH> <color> prints a box of specified size in a specified color,
- <WWxHH> <light/dark/bright> prints a box of specified size in a random color in a specified luminosity and its input underneath,
- <WWxHH> <light/dark/bright> <color> prints a box of specified size in a specified color in a specified luminosity with its hex code inside and luminosity input underneath.`;

const showAsk = () => {
  console.log(commandStyle(askText));
};

const showCombine = () => {
  console.log(commandStyle(combineText));
};

const createBox = (getBox, getColor) => {
  const luminosityText = `Luminosity: ${defaultBox.luminosity}`;

  getBox.text = chalk.hex(getColor)(defaultBox.text);
  getBox.hashtagChar = chalk.hex(getColor)(getBox.hashtagChar);

  const boxTopBottom = (
    getBox.hashtagChar.repeat(getBox.topBottomWidth) + '\n'
  ).repeat(getBox.topBottomHeight);

  const boxMiddle = `${
    getBox.hashtagChar.repeat(getBox.sideBorder) +
    defaultBox.spaceChar.repeat(
      defaultBox.topBottomWidth - 2 * defaultBox.sideBorder,
    ) +
    getBox.hashtagChar.repeat(getBox.sideBorder)
  }\n`;

  const boxText = `${
    getBox.hashtagChar.repeat(getBox.sideBorder) +
    defaultBox.spaceChar.repeat(defaultBox.textSpace) +
    chalk.hex(getColor)(defaultBox.text) +
    defaultBox.spaceChar.repeat(defaultBox.textSpace) +
    getBox.hashtagChar.repeat(getBox.sideBorder)
  }\n`;

  let newBox;
  const standardBox =
    boxTopBottom + boxMiddle + boxText + boxMiddle + boxTopBottom;
  const userBox = (getBox.hashtagChar.repeat(getBox.boxWidth) + '\n').repeat(
    getBox.boxHeight,
  );

  if ((getBox.boxWidth && getBox.boxHeight) === null) {
    if (!defaultBox.luminosity) {
      newBox = standardBox;
    } else {
      newBox = standardBox + luminosityText;
    }
  } else {
    if (!defaultBox.luminosity) {
      newBox = userBox;
    } else {
      newBox = userBox + luminosityText;
    }
  }

  console.log(chalk.hex(getColor)(newBox));
};

// randomColorBox function
const randomColorBox = () => {
  const makeRandomColor = randomColorFunction;
  defaultBox.text = makeRandomColor;
  defaultBox.hsl = parse(makeRandomColor).hsl;
  createBox(defaultBox, makeRandomColor);
};

const threeInputs = (input1, input2, input3) => {
  // <WWxHH> ...
  if (input1.includes('x') && input1[2] === 'x' && input1.length === 5) {
    defaultBox.boxWidth = input1.slice(0, 2);
    defaultBox.boxHeight = input1.slice(3, 5);

    // <WWxHH> <luminosity> ...
    if (input2 === 'light' || input2 === 'dark' || input2 === 'bright') {
      let colorUserLuminosity;
      defaultBox.luminosity = input2;

      // <WWxHH> <luminosity> randomColor()
      if (input3 === undefined) {
        colorUserLuminosity = randomColor({ luminosity: input2 });
      }
      // <WWxHH> <luminosity> <user color>
      else if (parse(input3).hex) {
        colorUserLuminosity = randomColor({ luminosity: input2, hue: input3 });
      }
      defaultBox.text = colorUserLuminosity;
      defaultBox.hsl = parse(colorUserLuminosity).hsl;
      createBox(defaultBox, colorUserLuminosity);
    }

    // <WWxHH> randomColor()
    if (input2 === undefined) {
      randomColorBox();
    }

    // <WWxHH> <user color>
    else if (parse(input2).hex) {
      const hex = parse(input2);
      defaultBox.hsl = parse(input2).hsl;
      createBox(defaultBox, hex.hex);
    }
  }
  // <luminosity> ...
  else if (input1 === 'light' || input1 === 'dark' || input1 === 'bright') {
    let colorUserLuminosity;
    defaultBox.luminosity = input1;

    // <luminosity> randomColor()
    if (input2 === undefined) {
      colorUserLuminosity = randomColor({ luminosity: input1 });
    }

    // <luminosity> <user color>
    else if (parse(input2).hex) {
      colorUserLuminosity = randomColor({ luminosity: input1, hue: input2 });
    }

    defaultBox.text = colorUserLuminosity;
    defaultBox.hsl = parse(colorUserLuminosity).hsl;
    createBox(defaultBox, colorUserLuminosity);
  }

  // <user color>
  else if (parse(input1).hex) {
    const hex = parse(input1);
    defaultBox.text = hex.hex;
    defaultBox.hsl = parse(input1).hsl;
    createBox(defaultBox, hex.hex);
  } else {
    showAsk();
  }
};

// <input>/<input>/<input>
if (!userInput1) {
  randomColorBox();
} else if (userInput1 === 'ask') {
  showAsk();
} else if (userInput1 === 'combine') {
  showCombine();
} else {
  threeInputs(userInput1, userInput2, userInput3);
}
