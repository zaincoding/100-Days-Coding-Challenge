// //Tasks
// //Comparisons:

// alert(5> 4)//true
// alert("Apple" > "Pineapple")//false
// alert("2" > "12") //true
// alert(undefined == null) // true
// alert(undefined === null) //false
// alert(null == "n0\n")//false
// alert(null === + "n0\n")//false


//Tasks

//1. if (a string with zero)
//any string except an empty one become true in logical context.
// if("0"){
//     alert("Hello")
// }


//2.The name of JavaScript

// let Name = prompt("Name of javaScript?", "")

// if(Name == 'ECMAScript'){
//     alert("Right")
// }
// else{
//     alert("You don't know ECMAScript.")
// }
    
//3. Rewrite 'if' into '?'

// let result;
// let a = +prompt("a?", "")
// let b = +prompt("b?", "")
// // if (a + b < 4){
// //     result = 'below'
// // }
// // else {
// //     result = "Over"
// // }
// // alert(result)

//  result = (a + b < 4) ? alert("below") : alert('Over')

//Show Sign
//4.
// let message = +prompt("Enter Value", )
// if(message > 0){
//     message = 1;
// }
// else if(message < 0){
//     message = -1
// }
// else if(message === 0) {
//     message = 0
// }
//  alert(message)


//5.
let message;
let login = prompt("Serving position", "")

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

message = (login == 'Employee') ? message = 'Hello':
          (login == 'Director') ? message = 'Greeting':
          (login == '') ? message = 'No login' :
          message = '';
alert(message)























////Conditional branching: if, '?'
//// "if" Statement
// let year = prompt("How many days and month in a year", "" )

// if(year === "365"){
//     alert("That's correct!")
//     alert("You are so smart")
// }


// //if and else
// let year = prompt("In which year the ECMAscript-2015 specification published?", "")
// if(year == 2015){
//     alert("You guess it right.")
// }else{
//     alert("You guess it wrong.")
// }




////else if(){}
// let year = prompt("In which year the ECMAscript-2015 specification published?", "")

// if(year > 2015){
//     alert("Too late..");
// }
// else if(year< 2015){
//     alert("Too early..")
// }
// else{
//     alert("Exactly!")
// }


// //conditional operator?
// let accessAllowed;

// let age = prompt("How old are you?", "")

// if(age> 18){
//     accessAllowed = true;
// }
// else{
//    accessAllowed = false;
// }

// alert(accessAllowed)


// //Multiple "?"

// let age = prompt("age?", 18);
// let message = (age < 3) ? "Hi, toddler!" :
// (age< 18)? "Hello!" :
// (age< 70)? "Senior citizen" :
// "what an unusual age!."

// alert(message)


// let message;

// let age = prompt("age?", 18);
// if(age < 3){
//  message = "Hi, toddler!";
// }
// else if(age< 18){
// message = "Hello!";}
// else if(age< 70){
// message = "Senior citizen";}
// else{
// message = "what an unusual age!.";}

// alert(message)


//Non-traditional use of ‘?’

// let company = prompt("Which company created javaScript?", '');

// (company == 'NetCafe')? alert("Right!"): alert("wronge!")


// //Using if for comparsion

// let company = prompt("Which company created javaScript?", "")

// if(company == "NestCape"){
//     alert("Right")
// }
// else{
//     alert("Wrong")
// }



// //Comparisons:
// let a =0;

// alert(Boolean(a))

// let b = "0";

// alert(Boolean(b))


// alert( 0 == false);
// alert("" == true)

// alert(0 === false)
// alert( 1 == true )

// alert(null == undefined)//tre
// alert(null === undefined)//false

// alert(null > 0)//false
// alert(null == 0)//false
// alert(null >= 0)//true

// alert('0' === false)
// alert(0 === false)

// let a = "0";

// alert(Boolean(a))



// alert(null > 0)
// alert(null === 0)
// alert(null >= 0)

// alert(undefined === 0)


