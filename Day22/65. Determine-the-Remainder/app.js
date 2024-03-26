import inquirer from "inquirer";
const number = 7;
const answer = await inquirer.prompt([
    { message: "Divide '7' by a number to produce a remainder:",
        type: 'number', name: 'remainder' }
]);
const { remainder } = answer;
if (remainder && remainder < 7) {
    const remainedNumber = number % remainder;
    console.log(`The remainder is: ${remainedNumber}`);
}
else {
    console.log("Please enter a valid number.");
}
