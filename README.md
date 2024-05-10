# Node.js Random Color Generator

### A simple Node.js command line App printing a colorful box of hashtags in Terminal:
- `node index.js` prints a default box with random color and its hex code inside;
- `node index.js ask` prints a help line, telling user to type correct commands;
- `node index.js <color>` prints a default box with specified color (see color formats below) its hex code inside;
- `node index.js <WWxHH>` prints a box of specified size in a random color;
- `node index.js <incorrect input>` prints a help line;


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