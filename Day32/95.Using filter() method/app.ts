//Define an array of numbers.
const array: number[] = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
//Define a function that takes an arry of number as input.
function filterNumber(gtNumbers: number[]) {
  //Using filter method to create a new array
  //containing numbers greater than 10.
  return gtNumbers.filter((gtNum) => gtNum > 10);
}
//Call the function with array as input and output the result.
console.log(filterNumber(array));//Output[11,13,15,17,19]
