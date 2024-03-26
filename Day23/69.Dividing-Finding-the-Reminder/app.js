function quotientRemainder(divident, divisor) {
    var quotient = Math.round((divident / divisor) * 100) / 100;
    var remainder = divident % divisor;
    return { remainder: remainder, quotient: quotient };
}
var result = quotientRemainder(8, 3);
console.log("Quotient: ", result.quotient);
console.log("Remainder: ", result.remainder);
