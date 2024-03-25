import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message:"Enter your name",
     name:"name",
     type:"string",
     
    },
    {message:"Enter your age.",
     name: "age",
    type:"number"}
]);

const {name,age} = answer;

if(name && age){
    console.log("\nUser Profile");
    console.log('Name: ' + name);
    console.log('Age: ' +age);
}else{
    console.log("Name or age is not provided")
}