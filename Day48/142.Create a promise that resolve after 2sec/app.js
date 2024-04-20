var delayTime = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hello,World");
    }, 4000);
});
delayTime.then(function (message) {
    console.log(message);
});
