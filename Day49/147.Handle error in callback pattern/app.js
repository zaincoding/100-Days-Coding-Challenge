var callBackPatern = new Promise(function (resolve, reject) {
    var randomNum = Math.round(Math.random() * 5) + 1;
    if (randomNum > 6) {
        setTimeout(function () {
            resolve('Hello, World');
        }, 2000);
    }
    else {
        setTimeout(function () {
            reject(new Error('Random number is not grater than 6'));
        }, 2000);
    }
});
callBackPatern.then(function (message) {
    console.log('The Promise resolved:', message);
}).catch(function (error) {
    console.log("Error occured:", error.message);
});
