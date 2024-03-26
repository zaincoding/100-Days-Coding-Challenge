function decimals(number1, number2) {
    var addNumber = number1 * number2;
    var roundNumber = Math.round(addNumber * 100) / 100;
    return roundNumber;
}
console.log(decimals(5.6, 4.23));
