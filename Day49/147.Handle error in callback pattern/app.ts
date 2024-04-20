//Coding Challenge:Day49

//Create a Promise with resolve and reject
const callBackFun = new Promise((resolve, reject) => {
//Generate a random number b/w 1 & 6
    const randomNum = Math.round(Math.random()*5) + 1
//Chek if randonNumber is greater than 6
  if(randomNum > 6){
//if it is greater resolve the promise after 2 second.
    setTimeout(() => {
     resolve('Hello, World')
    },2000)

  }else{
  //if random number is not greater than 6, reject the promise after 2 second.
  setTimeout(() =>{
    reject(new Error('Random number is not grater than 6'));
   
  },2000);
  }
 
});

//Handle the resolve and reject state of the promise
callBackFun.then((message) => {
//Log the resolve message
    console.log('The Promise resolved:', message)
}).catch((error) => {
  //Log the error message.
    console.log(`Error occured:`, error.message);
    
})


