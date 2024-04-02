//Define an array of numbers.
const array: number[] = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

//Use the reduce method to calculate the sum of all elements
const sum = array.reduce((a, c) => {
//we add the 'c'(currentValue) to the 'a'(accumulator) to calculate the sume
  return a + c;
}, 0);

//Output the result
console.log(sum);//100
