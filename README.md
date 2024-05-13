# Node.js Random Color Generator

### A simple Node.js command line App printing a colorful box of hashtags in Terminal:
- `node index.js` prints a default size box in a random color and its hex code inside;
- `node index.js <color>` prints a default size box in a specified color (see color formats below) and its hex code inside;
- `node index.js <light/dark/bright>` prints a default size box in a random color in a specified luminosity with its hex name inside and luminosity input underneath;
- `node index.js <light/dark/bright> <color>` prints a default size box in a specified color in a specified luminosity with its hex name inside and luminosity input underneath;
- `node index.js <WWxHH>` prints a box of specified size (eg. 02x20) in a random color;
- `node index.js <WWxHH color>` prints a box of specified size (eg. 02x20) in a specified color;
- `node index.js <WWxHH luminosity>` prints a box of specified size (eg. 02x20) in a random color in a specified luminosity and its input underneath;
- `node index.js <WWxHH luminosity color>` prints a box of specified size (eg. 02x20) in a specified color in a specified luminosity and its input underneath;

- `node index.js <incorrect input>` prints a list of possible commands;
- `node index.js ask` prints a list of possible commands;
- `node index.js combine` prints a list of possible command combinations;


#### Color formats:
- `rgb` - an array of [ red, green, blue ]
- `hsl` - an array of [ hue, saturation, luminosity ]
- `hsv` - an array of [ hue, saturation, value ]
- `cmyk` - an array of [ cyan, magenta, yellow, black ]
- `keyword` - the name of the color, if known
- `hex` - the hex rgb string #rrggbb
- `rgba` - rgb plus an alpha value from 0 to 1, - inclusive
- `hsla` - hsl plus an alpha value from 0 to 1, - inclusive
- `hsva` - hsv plus an alpha value from 0 to 1, - inclusive
- `cmyka` - cmyk plus an alpha value from 0 to 1, inclusive