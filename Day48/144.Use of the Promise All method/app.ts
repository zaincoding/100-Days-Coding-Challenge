//Coding Challenge:Day48

//Define an array of promise
const promises: Promise<string>[] = [
//Create and resolve the promise immediately
    Promise.resolve('Promise 1 resolved'),
//Create and resolve the promise immediately
    Promise.resolve('Promise 2 resolved'),
//Create and resolve the promise after the delay of 3 second.
    new Promise((resolve) => setTimeout(() => {
        resolve('promise 3 resolve')
    }, 3000))
];
//Handle all the promises concurrently.
Promise.all(promises)
       .then((output) =>{
//if all the promises resolve successfully,log output to the console.
        console.log(`All promises resolved:`, output)
       }).catch((error) => {
    //if any promise reject, log the error to the console.
        console.error(`At least one promise rejected,`,error)
       })