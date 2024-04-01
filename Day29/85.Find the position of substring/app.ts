//Define a string variable.
let subStr: string = "This code return the first occurence of the code.";

//Defined a function that find the position of first occurence of substring.
function findPosition(substr) {
  //Using the indexOf() method to find the position first occurence of 'code'
  let str = substr.indexOf("code");

  //return the position of substring or -1 if nto found
  return str;
}
//Call the function with subStr vairable as an argument and output the result.
console.log(findPosition(subStr));
