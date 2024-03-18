// Define a class named Laptop
class Laptop {
  // Define the constructor method with public properties
  constructor(public make: string, public model: string, public year: number) {}
  // Define a method named describe
  describe(): void {
    // Log a description of the laptop to the console
    console.log(`This is ${this.year}, ${this.make}, ${this.model}.`);
  }
}
// Create a new instance of the Laptop class with specific details
const myLaptop = new Laptop("Dell", "XPS 15", 2024);
// Call the describe method on the myLaptop object to display its description
myLaptop.describe();
