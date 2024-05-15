// //Function expressions
// function sayHi() {
//     alert( "Hello" );
//   }

//   (sayHi())


//   let  sayHi = function() {
//     alert( "Hello" );
//   }

//  alert(sayHi())


//    function sayHi(){
//     alert( "Hello" );
//   }
//  let func = sayHi
//  func()



//   let  sayHi = function() {
//     alert( "Hello" );
//   }
//  let func = sayHi;

// func()



// function Ask(question,yes,no){
//     if(confirm(question)) yes()
//       else no();
// }

// function showOk(){
//     alert("You are agree.")
// }

// function showDenied(){
//     alert("You denied.")
// }

// Ask("Do you agree?",showOk,showDenied)


// function Ask(question,yes,no){
//     if(confirm(question)) yes()
//       else no();
// }



// Ask(
// "Do you agree?",
//  function(){ alert("You agreed.")},
//  function(){ alert("You dined.")});


//Function Expression vs Function Declaration

// // Function Declaration
// function sum(a, b) {
//     return a + b;
//   }
// alert(sum(5,5))


//A Function Declaration can be called earlier than it is defined.

// sayHi("John"); // Hello, John

// function sayHi(name) {
//   alert( `Hello, ${name}` );
// }


//f it were a Function Expression, then it wouldn’t work:

//sayHello()

// let sayHello = function(){
//   alert("Hello")
// }


// let age = prompt("What is your age?", 18);

// // conditionally declare a function
// if (age < 18) {

//   function welcome() {
//     alert("Hello!");
//   }

// } else {

//   function welcome() {
//     alert("Greetings!");
//   }

// }


// welcome(); 



// let age = 16; // take 16 as an example

// if (age < 18) {
//   welcome();               // \   (runs)
//                            //  |
//   function welcome() {     //  |
//     alert("Hello!");       //  |  Function Declaration is available
//   }                        //  |  everywhere in the block where it's declared
//                            //  |
//   welcome();               // /   (runs)

// } else {

//   function welcome() {
//     alert("Greetings!");
//   }
// }

// // Here we're out of curly braces,
// // so we can not see Function Declarations made inside of them.

// welcome(); // also run




let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now