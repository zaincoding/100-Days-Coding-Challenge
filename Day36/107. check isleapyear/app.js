function quotient(divident, divisor) {
    var quot = divident % divisor;
    if (quot === 0) {
        console.log("This number is divisible.");
    }
    else {
        console.log("This number is not divisible.");
    }
}
quotient(6, 2);
quotient(6, 3);
quotient(5, 2);
