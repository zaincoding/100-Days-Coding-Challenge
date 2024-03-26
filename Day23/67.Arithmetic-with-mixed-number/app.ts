//import the 'inquirer' library to prompt the user for input
import inquirer from "inquirer";
//Prompt the user to enter their input.
const answer = await inquirer.prompt([
  //Display message to the user
  {
    message: "Enter first number number: ",
    type: "string",
    name: "firstNumber",
  },

  { message: "Enter second number: ", type: "number", name: "secondNumber" },
]);
//Extract the user input from the answer object.
const { firstNumber, secondNumber } = answer;
//Defining a function 'CombineNumberString' to combine string and number.
function CombineNumberString(firstNumber: string, secondNumber: number) {
  //Convert the firstNumber(as a string ) to a number using parseFloat.
  const num1: number = parseFloat(firstNumber);
  //Add the converted firstNumber to the second number and return the result.
  return num1 + secondNumber;
}
//Call the function to output the result.
console.log(CombineNumberString(firstNumber, secondNumber));
