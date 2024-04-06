//Define the variable & assign value of 'Math.random'
const HexaDecimal:number = Math.random() *900000 +100000;
//Round up 'HexaDecimal' value using 'Math.floor'
const HexaColor:number =(Math.floor(HexaDecimal))
//Output the result to the console.
console.log("#"+HexaColor)
