var promises = [
    Promise.resolve('Promise 1 resolved'),
    Promise.resolve('Promise 2 resolved'),
    new Promise(function (resolve) { return setTimeout(function () {
        resolve('promise 3 resolve');
    }, 2000); })
];
Promise.all(promises)
    .then(function (output) {
    console.log("All promises resolved:", output);
}).catch(function (error) {
    console.error("At least one promise rejected,", error);
});
