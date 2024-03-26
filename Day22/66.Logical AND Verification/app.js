//Import the 'inquirer' libaray to prompt the user for input
import inquirer from "inquirer";
//Define xyz variable 
const xyz = 7;
//Prompt the user to enter a number.
const answer = await inquirer.prompt([
    { message: "Enter a value greater than 7 and smaller 10:",
        type: "number", name: "bool" }
]);
//Extract the entered value from the user's response.
const { bool } = answer;
//check if condition true run the block code 
if (bool >= 0 && bool < 10) {
    let boolean = xyz < bool;
    console.log(boolean);
}
else {
    console.log("Please enter a valid number.");
}
