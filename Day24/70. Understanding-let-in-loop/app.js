//let is a block scope variable which is not accessible outside the blocks.if it is defined inside the blcoks.
function loop() {
    for (var num = 0; num < 5; num++) {
        console.log(num);
    }
}
//cannot find name 'txt'
console.log(num);
