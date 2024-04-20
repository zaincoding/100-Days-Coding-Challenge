//Coding Challenge: Day48

//Create a Promise named 'delayTime' that resolve with string after a delay time.
const delayTime:Promise<string> = new Promise((resolve) =>{
//Simulate a delay using setTimeout
  setTimeout(() => {
    resolve(`Hello,World`)
  }, 3000);
});
//Handle the delaytime promise 
delayTime.then((message) => {
//Log the resolved value to the console.
    console.log(message)
});