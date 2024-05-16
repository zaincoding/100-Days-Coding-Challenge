//Arrow functions, the basics

//let func = (arg1, arg2, ..., argN) => expression;



/*let func = function(arg1, arg2, ..., argN) {
    return expression;
  };*/

  //Let’s see a concrete example:


//   let func = (a,b) =>  a+b ;

//   alert(func(2,5));

//If we have only one argument, then parentheses around parameters can be omitted,
// making that even shorter.

// let personName = name => name;

// alert(personName('zain khan'))

// or

// let double = n => n*2;

// alert(double(5))


// let sayHi = () => alert("Hello");

// sayHi();


//Arrow functions can be used in the same way as Function Expressions.
//for instance:

// let age = prompt("What is your age?",18);

// let welcome = (age > 18) ? 
// () => alert("Hello"): 
// () => alert('Greeting');


// welcome()


//Multiline arrow functions

// let sum = (a,b) =>{
//     let result = a +b;
//     return result;
// }

// alert(sum(5,8))

//Rewrite with arrow functions.
//Replace Function Expressions with arrow functions in the code below:

//1.function expression

// function ask(question, yes, no){
//     if(confirm(question)) yes();
//     else no();
// }

// ask(
//     "Do you agrred?",
//     function() { alert("You agreed.")},
//     function() { alert("You canceled.")}
// )

//2.rewrite function expression to arrow function.

// let ask = (question,yes,no) => {
//     if(confirm(question)) yes();
//     else no();
// }

// ask(
//     "Do you agree?",
//     () => {alert("you agreed.")},
//     () => {alert("you canceled")}
// )