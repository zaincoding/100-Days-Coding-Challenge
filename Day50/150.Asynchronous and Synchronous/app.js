console.log('start with asynchronou function.');
for (var i = 0; i < 10000; i++) {
    console.log(i);
}
console.log('End\n');
console.log('start with synchronous function');
setTimeout(function () {
    console.log('middle');
});
console.log('End');
