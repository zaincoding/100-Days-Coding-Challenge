//1. let i = 3;

// while(i){
//   alert(i--);

// }
//the while(i) loop stop when i = 0


//Which values does the while loop show?

//2.
//prefixt last value printed 4
    // let i = 0;
    // while(i++ < 5) alert(i)

//postfixt last value 5.
// let i = 0;
// while(i++ < 5) alert(i)


  //Which values get shown by the "for" loop?
  //3.
//0 to 4
  // for(let i=0; i<5; i++){
  //   alert(i)
  // }
//0 to 4
    // for(let i=0; i<5; ++i)
    // alert(i)
  
//4.
//Output even numbers in the loop.

// for(let i=0; i<= 10; i++){
//   if(i % 2 === 1)continue;
//   alert(i)
// }


//Replace "for" with "while"
//5.
// let i=0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++;
// }

//Repeat until the input is correct.
/*
let num;
do{
  num = prompt("Enter number greater than 100",0)
}while(num<=100 && num)
  */

//Output prime numbers
/*
Write the code which outputs prime numbers in the interval from 2 to n.
For n = 10 the result will be 2,3,5,7.
*/

// let n = 10;

// for(n=1; n<10; ++n){
  
//   if(n > 1){
// if(n % 2 === 0 && n!==2)continue;
//   alert(n)

//   }
  
// }
























// while(condition){
//     //code
//     //so-called "loop body"
// }

//While the condition is truthy, the code from the loop body is executed.

// let i=0;
// while(i<3){ //show /0 /1 /2
//     alert(i)
// i++
// }


// let i = 3;
// while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
//   alert( i );
//   i--;
// }

// //Curly braces are not required for a single-line body.
// let i = 3;
// while (i) alert(i--);


//The “do…while” loop
/* do {
  // loop body
} while (condition);*/


//The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
/*
let i = 0;
do {
  alert( i );
  i++;
} while (i );
*/

//This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy.
// Usually, the other form is preferred: while(…) {…}.

//The “for” loop
/*
for (begin; condition; step) {
  // ... loop body ...
}
*/
/*
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}
*/
/*
The general loop algorithm works like this:
Run begin
→ (if condition → run body and run step)
*/

// let i = 0
// // if condition → run body and run step
// if (i < 3) { alert(i); i++ }

//Inline variable declaration
/*Here, the “counter” variable i is declared right in the loop. 
/This is called an “inline” variable declaration.
Such variables are visible only inside the loop.*/

//  for (let i = 0; i < 3; i++) {
//   alert(i); // 0, 1, 2
// }
// alert(i); // error, no such variable

//Instead of defining a variable, we could use an existing one:
// let i = 0;

// for (i = 0; i < 3; i++) { // use an existing variable
//  // alert(i); // 0, 1, 2
// }
// alert(i); // 3, visible, because declared outside of the loop


//Skipping parts
/*
let i = 0;

for (; i < 3;) {
  alert( i++ );
}
This makes the loop identical to while (i < 3).
*/
//infinite
//for (;;) {
  // repeats without limits
//}

//Breaking the loop


// let sum = 0;

// while (true){
// let value = +prompt("Enter a Value",'' );
  
// if(!value) break
// sum +=value;
// }



// alert(sum)


//Continue to the next iteration
/*The continue directive is a “lighter version” of break.
 It doesn’t stop the whole loop. Instead, 
 it stops the current iteration and forces the loop to start a new one (if the condition allows).*/

// for (let i=0; i<10; i++){
//   if(i % 2 === 0)continue;
//   alert(i)
// }

////Labels for break/continue.
/*
   for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // what if we want to exit from here to Done (below)?
    
  }
}

alert('Done!');
*/


//A label is an identifier with a colon before a loop:
/*
labelName: for (...) {
  ...
}  */
/*
outer:for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');
if(!input) break outer;
    // what if we want to exit from here to Done (below)?
if(!input) break outer;    
  }
}

alert('Done!');
*/