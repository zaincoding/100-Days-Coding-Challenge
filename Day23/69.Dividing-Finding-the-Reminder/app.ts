//Define a function named 'quotientRemainder' with two parameters and it's type number.
function quotientRemainder(
  divident: number,
  divisor: number
): { remainder: number; quotient: number } {
  //Calculate the quotient by dividing the divident by divisor and rounding to two decimal places.
  const quotient = Math.round((divident / divisor) * 100) / 100;
  //Calculate the remainder by finding the reminder of the divident divided by the divisor
  const remainder = divident % divisor;
  //return the object contain remainder and quotient.
  return { remainder, quotient };
}
//Call the function with divident and divisor.
const result = quotientRemainder(8, 3);

//Log the quotient and remainder to the console.
console.log("Quotient: ", result.quotient);
console.log("Remainder: ", result.remainder);
