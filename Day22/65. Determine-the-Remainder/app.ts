//import the 'inquirer' library to prompt the user for input.
import inquirer from "inquirer"
//Define constant variable 'number'.
const number:number = 7;
//prompt a user to enter input
const answer = await inquirer.prompt([
    {message:"Divide '7' by a number to produce a remainder:",
     type:'number', name:'remainder'}
])
//Extracte the entered number from the user's response.
const {remainder} = answer;
//check if the entered number is valid less than '7'.
if(remainder && remainder< 7){
    //Calculate the remainder when number value is divided by the user input.
    const remainedNumber = number % remainder
    //Log the calculated remainder to the console.
    console.log(`The remainder is: ${remainedNumber}`)
}else{
    //Log the error message if the user input is not valid or greater than 7
    console.log("Please enter a valid number.")
}