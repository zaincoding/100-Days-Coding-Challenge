import inquirer from "inquirer";
const text = "Age";
const answer = await inquirer.prompt([
    { message: "Enter your age.", type: "number", name: "age" }
]);
const { age } = answer;
if (age) {
    function combineNameAge(text, age) {
        return `"${text}: ${age}"`;
    }
    console.log(combineNameAge(text, age));
}
else {
    console.log("Please enter a valid number.");
}
