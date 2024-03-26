import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number number: ",
        type: "string", name: "firstNumber" },
    { message: "Enter second number: ",
        type: "number", name: "secondNumber" }
]);
const { firstNumber, secondNumber } = answer;
function CombineNumberString(firstNumber, secondNumber) {
    const num1 = parseFloat(firstNumber);
    return num1 + secondNumber;
}
console.log(CombineNumberString(firstNumber, secondNumber));
