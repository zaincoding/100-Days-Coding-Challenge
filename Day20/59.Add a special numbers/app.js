import inquirer from "inquirer";
//Declareda a variable and assigned value 10.
const adder = 10;
//prompting th user to enter a number.
const answer = await inquirer.prompt([
    { message: "Enter number",
        type: "number",
        name: "userNumber" }
]);
//Extract the user input stored in answer object.
const Adders = answer.userNumber;
//checking the user enter a valid number
if (!isNaN(Adders)) {
    const result = Adders + adder;
    console.log("Result: " + result);
}
else {
    console.log("Please enter a valid number.");
}
