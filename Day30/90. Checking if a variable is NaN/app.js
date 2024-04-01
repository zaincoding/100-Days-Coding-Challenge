//Define a function to check if a value is not a number.
function checkisNaN(check) {
    //this method return true if the value included characters,otherwise false.
    return isNaN(check);
}
//Output the result of data type string, value characters
console.log(checkisNaN("One two three")); //Output true
//Output the result of data type string, value numbers.
console.log(checkisNaN("123")); //Output false
//Output the result of data type number, value number.
console.log(checkisNaN(123)); //Output false
