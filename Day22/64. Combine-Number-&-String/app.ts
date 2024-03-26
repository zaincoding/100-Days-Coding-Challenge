//import the 'inquirer' to prompt the user for input.
import inquirer from "inquirer";

//Define a constant variable 'text'.
const text: string = "Age";
//Prompt the user to enter their age using 'inquirer'.
const answer = await inquirer.prompt([
  { message: "Enter your age.", type: "number", name: "age" },
]);
//Extract the entered age from the user's response.
const { age } = answer;
//Check if the entered age is a valid number.
if (age) {
  //Define a function 'combineNameAge' to combine 'text' and 'age'.
  function combineNameAge(text: string, age: number) {
    return `"${text}: ${age}"`;
  }
  //Log the combined string to the console.
  console.log(combineNameAge(text, age));
} else {
  //Log the error message if the entered value is not a valid number.
  console.log("Please enter a valid number.");
}
