import inquirer from "inquirer";

//Declare and assign value 10
const adder = 10;
//prompting th user to enter a number.
const answer = await inquirer.prompt([
    {message:"Enter number",
     type: "number",
     name:"userNumber"}
])
//Extract the user input stored in answer object.
const Adders = answer.userNumber;
//checking the user enter a valid number
if(!isNaN(Adders)){
//add the user input to the predefined variable 'adder' & store in result
const result = Adders + adder;
//Output the result.
console.log("Result: " + result);
}else{
    console.log("Please enter a valid number.");
}