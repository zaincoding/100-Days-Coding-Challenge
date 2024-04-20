//Coding Challenge:Day47
// Define a class to represent a person's name
var personName = /** @class */ (function () {
    function personName(firstName) {
        this.firstName = firstName;
        // Initialize the firstName property
        this.firstName = firstName;
    }
    // Method to return the person's first name
    personName.prototype.person = function () {
        return this.firstName;
    };
    return personName;
}());
// Create an instance of the personName class with the first name 'Ahmed'
var fName = new personName('Ahmed');
// Log the first name using the person method of the fName object
console.log(fName.person());
//Define a simple function that returns the provided first name
function person(firstName) {
    return firstName;
}
// Log the string 'Ahmed'
console.log('Ahmed');
var a = 10;
var b = 5;
//Check a is greater than b
if (a > b) {
    // Log true if a is greater than b
    console.log(a > b);
}
else {
    console.log("b is greater than a");
}
