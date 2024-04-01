//Define a function that round the number to the nearest integer.
function decimalNumber(deci: number): number {
  //this method return the rounded number to the nearest integer.
  return Math.round(deci);
}
// call the function and pass '5.50' as an argument,
// log the result to the console.
console.log(decimalNumber(5.5)); //Output 6
