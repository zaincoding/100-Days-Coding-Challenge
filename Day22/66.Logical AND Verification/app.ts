//Import the 'inquirer' libaray to prompt the user for input
import inquirer from "inquirer";
//Define xyz variable
const xyz: number = 7;
//Prompt the user to enter a number.
const answer = await inquirer.prompt([
  {
    message: "Enter a value greater than 7 and smaller 10:",
    type: "number",
    name: "bool",
  },
]);
//Extract the entered value from the user's response.
const { bool } = answer;

// Check if the entered value is valid (greater than or equal to 0 and less than 10).
if (bool >= 0 && bool < 10) {
  let boolean = xyz < bool;
  // Log the result of the comparison to the console.
  console.log(boolean);
} else {
  // Log an error message if the entered value is not valid.
  console.log("Please enter a valid number.");
}
