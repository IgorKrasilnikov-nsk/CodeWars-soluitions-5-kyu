/*
When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. 
Implement a function that meets these requirements:
-Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
-Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255

Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

Example: "#FF9933" --> {r: 255, g: 153, b: 51}
*/

function hexStringToRGB(hexString) {
  const hex = hexString.replace('#', '');
        
  return {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16),
  };
}

console.log(hexStringToRGB('#FF9933')) // {r:255, g:153, b:51}
console.log(hexStringToRGB('#beaded')) // {r:190, g:173, b:237}
console.log(hexStringToRGB('#000000')) // {r:0, g:0, b:0}
console.log(hexStringToRGB('#111111')) // {r:17, g:17, b:17}
console.log(hexStringToRGB('#Fa3456')) // {r:250, g:52, b:86}
