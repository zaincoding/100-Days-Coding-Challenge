//import the inquirer library for user input.
import inquirer from "inquirer";
//prompting user to enter five numbers
const answer = await inquirer.prompt([
    { message: "Enter first number",
        name: "number1",
        type: "number"
    },
    { message: "Enter first number",
        name: "number2",
        type: "number"
    },
    { message: "Enter first number",
        name: "number3",
        type: "number"
    },
    { message: "Enter first number",
        name: "number4",
        type: "number"
    },
    { message: "Enter first number",
        name: "number5",
        type: "number"
    }
]);
//Extracting individual numbers from the user's input.
const number1 = answer.number1;
const number2 = answer.number2;
const number3 = answer.number3;
const number4 = answer.number4;
const number5 = answer.number5;
//Calculating the average of the numbers
const ratio = (number1 + number2 + number3 + number4 + number5) / 5;
//Output the result.
console.log(`The average of the number is ${ratio}`);
