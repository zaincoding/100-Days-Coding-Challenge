//Define the variable & assign value of 'Math.random'
var HexaDecimal = Math.random() * 900000 + 100000;
//Round up 'HexaDecimal' value using 'Math.floor'
var HexaColor = (Math.floor(HexaDecimal));
//Output the result to the console.
console.log("#" + HexaColor);
