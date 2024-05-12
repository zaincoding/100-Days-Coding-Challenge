//************    Tasks   ***************//
// //1.What's the result of OR?
// alert( null || 2 || undefined );//2


// //2.What's the result of OR'ed alerts?
// alert( alert(1) || 2 || alert(3) ); //1 //2

// //3.What is the result of AND?
// alert(1 && null && 2)

// //4.What is the result of AND'ed alerts?
// alert( alert(1) && alert(2) );

// //5.The result of OR AND OR
// alert( null || 2 && 3 || 4 );

//6.Check the range between
  
// let age = 90;

// if(age > 14 && age <= 90){
//     alert("true")
// }

// A question about "if"

// if (0 || 1) alert( 'first' );//truthy
// if (1 && 0)  alert( 'second' )//falsy
// if (null || -1 && 1) alert( 'third' );


let user = prompt("Who's there?","")

if(user === 'Admain'){
let  password = prompt("Enter your password", "");

 if(password === "TheMaster"){
    alert("Welcome!")
}
else if(password === null || password === ''){
    alert('Canceled')
}
else {
    alert('Wrong password')
}

}

else if(user === null || user === ''){
    alert("Canceled")
}
else{
    alert("I don't know you")
}



























//Logical operators
//||(OR), &&(AND), !(NOT), ??(Nulish Coalescing)

//OR:
/*The OR || operator does the following:

Evaluates operands from left to right.
For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were false), returns the last operand*/
//always tre except when both are false
// alert(true || true);
// alert(false || true);
// alert(true || false);
// alert(false || false);


// if(0 || 1){
//     alert("Truthy")
// }

// let hour = 9;

// if(hour < 10 || hour > 18){
//   alert("The Office is closed")
// }

// let hour = 12;
// let isWeakend = true;

// if(hour < 10 || hour > 18 || isWeekend){
//     alert("The office is closed.")//it's weekend.
// }

//// //OR "||" finds the first truthy value
// //return the first true value if all false return the last false value.
// alert(1 || 0 )// 1(1 is truthy)
// alert(null || 1)// 1(1 is the first truth value)
// alert(undefined|| null || 0) //0( all false) 


// //Getting the first truthy value from a list of variables or expressions.

// let firstName = "";
// let lastName = "";
// let nickName = "SuperCoder";

// alert(firstName || lastName || nickName || "Anonymous")


////Short-circuit evaluation.

// true || alert("not printed");
// false || alert("printed")

////&& (AND)
// alert(true && true);
// alert(true && false);
// alert(false && true);
// alert(false && false);

// //&&(AND) operator example with if
// let hour = 12;
// let minuts = 30;

// if(hour === 12  && minuts === 30){
//     alert('The time is 12:30')
// }


// if(1 && 0){
//     alert("Won't work, because the result is falsy")
// }

//AND “&&” finds the first falsy value

/*The AND && operator does the following:

Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.*/

// //if the first operand is true AND return the second operand:
// alert(1 && 0) //return 0
// alert(1 && 5) // return 5

// //if the first operand is false returne it and the second operand is ignored.
// alert(null && 5) //null
// alert(0 && "no matter what") //0

// //if we pass several values it will return the first false value

// alert(1 && 2 && null && 3 )
// //when all values are true the last value returned.
// alert(1 && 2 && 3)

//Don’t replace if with || or &&

// let x = 1;
// (x > 0) && alert("Greater than Zero")

// let x =1;
// if(x > 0) alert("Greater than zero")


// //! (NOT)
// //The boolean NOT operator is represented with an exclamation sign !.
// //convert the operand to boolean type and return inverse value
// alert(!true)
// alert(!0)

////A double NOT !! is sometimes used for converting a value to boolean type:
// alert(!!("non-empty string"))
// alert(!!null)
////There’s a little more verbose way to do the same thing – a built-in Boolean function:
// alert(Boolean("non-empty string"))
// alert(Boolean(null))




