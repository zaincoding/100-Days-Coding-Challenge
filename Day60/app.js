//Tasks

//is "else" required?

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } {
//     // ...
//     return confirm('Did parents allow you?');
//   }
// }

// let age = prompt("Are you above 18?.", 18)

// if (checkAge(age)){
//   alert("grant access.")
// }else{
//        alert("Access denied.")
// }


//Rewrite the function using '?' or '||'


// function checkAge(age) {
//  return (age > 18 ) ? true : confirm("Do you allowed by your parents?") 
    
//   }
// let age = prompt("Are you above 18?.", 18)

// alert(checkAge(age))

// // OR ||
// function checkAge(age) {
//  return (age > 18 ) || confirm("Do you allowed by your parents?") 
    
//   }
// let age = prompt("Are you above 18?.", 18)

// alert(checkAge(age))


// Function min(a, b)

// function min(a,b){
//   return Math.min(a,b);
// }

// let a = prompt("enter first int","")
// let b = prompt("enter first int","")

// alert(min(a,b))


// function min(a,b){
//   return Math.pow(a,b);
// }

// let a = prompt("enter first int","")
// let b = prompt("enter first int","")

// alert(min(a,b))




















//Function Declaration
// function showMessage() {
//     alert( 'Hello everyone!' );
//   }



//Call function by it's name.
//Function Declaration
// function showMessage() {
//     alert( 'Hello everyone!' );
//   }

//   showMessage()


//Local variables
//A variable declared inside a function is only visible inside that function.
// function showMessage() {
//     let message = "Hello, I'm JavaScript!"; // local variable
  
//     alert( message );
//   }
  
//   showMessage(); // Hello, I'm JavaScript!
  
//   alert( message ); // <-- Error! The variable is local to the function

  //Outer variables

//   let userName = 'John';
  
//   function showMessage(){
//     message = `My name is ${userName}.`
//     alert(message)
//   }

//   showMessage()


// //The function has full access to the outer variable. It can modify it as well.

// //For instance:

//   let userName = 'John';
  
//   function showMessage(){
//      userName = 'Bob'
//     message = `My name is ${userName}.`
//     alert(message)
//   }
//    alert(userName)

//   showMessage()

//   alert(userName)


//If a same-named variable is declared inside the function then it shadows the outer one. 
//For instance

//   let userName = 'John';
  
//   function showMessage(){
//     let userName = 'Bob'
//     message = `My name is ${userName}.`
//     alert(message)
//   }
//    alert(userName)

//   showMessage()

//   alert(userName)

/*Global variables
Variables declared outside of any function, such as the outer userName in the code above, are called global.

Global variables are visible from any function (unless shadowed by locals).*/

//Parameters


  
//   function showMessage(from, text){
  
//     from = "'" + from + "'";
//     alert(from + ' : ' + text)
//   }
//  let from = "Ann";
//  showMessage(from, 'Hello');
//  alert(from)



// //Default values
// function showMessage(from, text='no text given'){
  
//     from = "'" + from + "'";
//     alert(from + ' : ' + text)
//   }
//  let from = "Ann";
//  showMessage(from);


// //Default parameter in old javascript code
// function showMessage(from, text){
  
//     from = "'" + from + "'";
//     if(text === undefined){
//        text = 'no text given'}
//     alert(from + ' : ' + text)
//   }
//  let from = "Ann";
//  showMessage(from);

////Or using the || operator:
// function showMessage(from, text){
  
//     from = "'" + from + "'";
    
//        text = text || 'no text given'
//     alert(from + ' : ' + text)
//   }
//  let from = "Ann";
//  showMessage(from);


// function showMessage(text){
//   text = text || 'empty'
//     alert(text)
//   }
//  showMessage();

//Modern JavaScript engines support the nullish coalescing operator ??, 
//it’s better when most falsy values, such as 0, should be considered “normal”:

// function showMessage(text){
//     // if text is undefined or null, show "unknown"
//   text = (text ?? 'unknown')
//     alert(text)
//   }
//  showMessage(0);
//  showMessage(null);
//  showMessage();

//Returning a value
//A function can return a value back into the calling code as the result.

// function sum(a,b){
//     return  a + b;

// }
// let result = sum(2,3)
//  alert(result)



//There may be many occurrences of return in a single function. For instance:

// function checkAge(age){
//   if(age >=18 ){
//     return true;
//   }
//   else{
//     return confirm("Do you have permission from your parents?");
//   }
// }

//let age = prompt("How old are you?",18);

// if(checkAge(age)){
//   alert("Access granted.")
// }
// else{
//   alert("Access denied.")
// }

//Functions == Comments

// function showPrimes(n) {

// function showPrimes(n){
// nextPrime: for(let i = 2  ; i < n ; i++){

//   for (let j = 2; j < i; j++){
//     if(i % j == 0)continue nextPrime;
//   }
//   alert(i);
// }

// }
// showPrimes(10)

// function showPrimes(n) {

//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     alert(i);  // a prime
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) { 
//      if ( n % i == 0) return false; 
//      alert(i)
//   }
//     return true;
// }

// alert(isPrime(7))