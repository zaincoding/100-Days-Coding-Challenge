import inquirer from "inquirer";
let randomNumber = Math.round(Math.random() * 5) + 1;
console.log(randomNumber);
async function greet() {
    const random = await inquirer.prompt([{
            message: 'Enter number from 1 to 6', name: "Guess", type: "number"
        }]);
    const { Guess } = random;
    if (Guess === randomNumber) {
        console.log(`Congratulation! you Win`);
    }
    else {
        console.log(`The number is not match)
    await greet();
  }
}
console.log(greet()));
    }
}
