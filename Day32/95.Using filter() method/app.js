var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
function filterNumber(gtNumbers) {
    return gtNumbers.filter(function (gtNum) { return gtNum > 10; });
}
console.log(filterNumber(array));
