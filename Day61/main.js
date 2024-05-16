// //JavaScript specials.

// //Code Structure.
// //Statements are delimited with a semicolon:
// alert('Hello'); alert('World')

// //Usually, a line-break is also treated as a delimiter, so that would also work:
// alert('Hello')
// alert('World')

// //That’s called “automatic semicolon insertion”. 
// //Sometimes it doesn’t work, for instance:
// alert("There will be an error after this message")
// [1, 2].forEach(alert)


// function f() {
//     // no semicolon needed after function declaration
//   }
  
//   for(;;) {
//     // no semicolon needed after the loop
//   }


//Strict mode
//To fully enable all features of modern JavaScript, 
//we should start scripts with "use strict".
// 'use strict';

// ...
/*The directive must be at the top of a script or at the beginning of a function body.

Without "use strict", everything still works, but some features behave in the old-fashioned, “compatible” way. We’d generally prefer the modern behavior.

Some modern features of the language (like classes that we’ll study in the future) enable strict mode implicitly.*/


//The typeof operator returns the type for a value, with two exceptions:

// typeof null == "object" // error in the language
// typeof function(){} == "function" // functions are treated specially.


//Interaction:

// let userName = prompt("Enter you name?","Alice");
// let isTeaWanted = confirm("Do you want tea?");

// alert("Visitor: "+ userName);
// alert("Tea Wanted: "+ isTeaWanted);

//The “switch” construct
// let age =  prompt('Your age?', 18);

// switch (age) {
//   case 18:
//     alert("Won't work"); // the result of prompt is a string, not a number
//     break;

//   case "18":
//     alert("This works!");
//     break;

//   default:
//     alert("Any value not equal to one above");
// }

//Functions

//1.Function Declaration: the function in the main code flow
// function sum(a, b) {
//     let result = a + b;
  
//     return result;
//   }
// alert(sum(5,5))

//2.Function Expression: the function in the context of an expression

// let sum = function(a, b) {
//     let result = a + b;
  
//     return result;
//   };


// //3.Arrow functions:
// // expression on the right side
// let sum = (a, b) => a + b;

// // or multi-line syntax with { ... }, need return here:
// let sum = (a, b) => {
//   // ...
//   return a + b;
// }

// // without arguments
// let sayHi = () => alert("Hello");

// // with a single argument
// let double = n => n * 2;



