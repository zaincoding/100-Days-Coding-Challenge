//Coding challenge:Day47
// Importing the 'inquirer' library for handling command-line user input
import inquirer from "inquirer"

// Generating a random number between 1 and 6 (inclusive)
let randomNumber = Math.round(Math.random()*5)+1

// Defining an async function.
async function match() {
const  random = await inquirer.prompt([{
    // Prompting the user to enter a number from 1 to 6
    message:'Enter number from 1 to 6', name:"Guess", type:"number"
}]);
    // Extracting the user's guess from the response.
  //check the condition.
  const {Guess} = random;
  if (Guess === randomNumber){
    console.log(`Congratulation! you Win`)
  }else{
    console.log(`The number is not match`)
    // If the guess is incorrect, recursively call 'match()' to allow the user to guess again
    await match();
  }
}
console.log(match())