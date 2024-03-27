//Define a function with default values 
function greetUser(user:string='Jhon', greet:string='Hello'){
//return a string that concatenates the greeting and user.
    return `${greet},  ${user}`;
}
let userName:string = 'Tahir';

//Call the function with 'userName' parameter while print the default value of the second parameter.
console.log(greetUser(userName))
//Call the function without any argument so it will print both the default value.
console.log(greetUser())