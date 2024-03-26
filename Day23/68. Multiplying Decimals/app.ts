//Define a function 'decimal' that takes two parameters as number.
function decimals(number1: number, number2: number) {
  //Calculate the product of two numbers.
  const addNumber: number = number1 * number2;
  //Round the product to two decimal places.
  const roundNumber: number = Math.round(addNumber * 100) / 100;
  //return the round result.
  return roundNumber;
}
//Call the function with two numbers and log the result to the console.
console.log(decimals(5.6, 4.23));
