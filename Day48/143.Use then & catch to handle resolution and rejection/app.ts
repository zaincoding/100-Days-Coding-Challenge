
//coding Challeng:Day48

//Create a promise named 'delayTime'
const delayTime:Promise<string> = new Promise((resolve, reject) =>{
//simulate an asynchronous operation with the daly of 3 seconds
    setTimeout(() =>{
    //Generate a random number b/w 1 to 6.
     const randomNumber = Math.round(Math.random()*5) +1;
    //check if the random number is less than 3.
     if (randomNumber< 3){
  //if conditionis met, resolve the promise with string value 'Hellow,World'
        resolve(`Hello,World`)
     }else {
  //if the condition is not met,reject the promise with an error message including randomNumber.
        reject(new Error(`An error occured ${randomNumber}`));
        
     }
  //3000 milliseconds delay
    },3000)
});
//Handle the resolve value ot the promise
delayTime.then((message:string) =>{
//Log the resolve value to the console.
  console.log(`Resolved`,message)
//Handle any errors that occur during the promise execution.
}).catch((error:Error) => {
    console.log(`Error`, error.message);
})