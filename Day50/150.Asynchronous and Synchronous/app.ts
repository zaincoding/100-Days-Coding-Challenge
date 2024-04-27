
//Log the to the console
console.log('start.')
//Log synchronous loop numbers from 0 to 9999
for(let i=0; i<10000; i++){
//Log the current value of i
    console.log(i)
}
//Log to the console.
 console.log('End\n')

//log to the console
 console.log('start')
//asynchronous 'setTimeout' function with callback.
 setTimeout(() =>{
 //Log the string to the console after the timeout.
    console.log('middle')

 },0)
//call the function.
 console.log('End')







