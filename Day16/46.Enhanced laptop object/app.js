// Define a class named Laptop
var Laptop = /** @class */ (function () {
    // Define the constructor method with public properties
    function Laptop(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Define a method named describe
    Laptop.prototype.describe = function () {
        // Log a description of the laptop to the console
        console.log("This is ".concat(this.year, ", ").concat(this.make, ", ").concat(this.model, "."));
    };
    return Laptop;
}());
// Create a new instance of the Laptop class with specific details
var myLaptop = new Laptop("Dell", "XPS 15", 2024);
// Call the describe method on the myLaptop object to display its description
myLaptop.describe();
