//Coding Challenge:Day49

//Define a function 'callbackFun' 
//that accept a callback function,name and lastName as argument.
const callBackFun = ((callback, name,lastName) => {
//Invoke the provided callback with  the provided name
    callback(name,lastName);
})
//Define a callback function 'greet',to log the message.
 function greet(name,lastName) {
    console.log (`Welcom to, ${name} ${lastName}.`)
}
//Call 'callBackfun' pass 'greet' as callback function, bilal & khan as arguments.
     callBackFun(greet,'Bilal','Khan')