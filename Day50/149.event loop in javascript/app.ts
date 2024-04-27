//Coding challenge:Day50

//Define function
function myFunction(){
//Log  the string to the console.
 console.log('1st string execution ');
 //Asynchronous 'setTimeout' function with a callback
  setTimeout(() => {
  //Log the  string
  console.log('2nd string execution')
  //setTimeout with the delay 0 milisecond,
  //execute it asynchronously after the synchronous code block
  },0)
//Log the string to the console.
  console.log('3rd String execution')
}

//call 'myFunction' trigger the execution of the function.
myFunction();






