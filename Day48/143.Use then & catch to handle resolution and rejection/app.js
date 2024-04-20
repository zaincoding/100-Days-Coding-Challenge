var delayTime = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var shouldResolve = Math.round(Math.random() * 5) + 1;
        if (shouldResolve < 3) {
            resolve("Hello,World");
        }
        else {
            reject(new Error("An error occured ".concat(shouldResolve)));
        }
    }, 2000);
});
delayTime.then(function (message) {
    console.log("Resolved", message);
}).catch(function (error) {
    console.log("Error", error.message);
});
