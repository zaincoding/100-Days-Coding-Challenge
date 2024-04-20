//Define a function 'callbackFun' that accept a callback function and a name as argument.
var callBackFun = (function (callback, name, lastName) {
    //Invoke the provided callback with  the provided name
    callback(name, lastName);
});
//Define a callback function 'greet',to log the message.
function greet(fullname, lastName) {
    console.log("Welcom to ".concat(fullname, " ").concat(lastName, "."));
}
//Call 'callBackfun' pass 'greet' as callback and bilal as name argument.
callBackFun(greet, 'Bilal', 'Khan');
