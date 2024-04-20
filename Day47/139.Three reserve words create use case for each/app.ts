//Coding Challenge:Day47

// Define a class to represent a person's name
class personName{
    constructor(private firstName:string){
        // Initialize the firstName property
        this.firstName = firstName;
    }
    // Method to return the person's first name
    person(){
        return this.firstName;
    }
}
// Create an instance of the personName class with the first name 'Ahmed'
const fName = new personName('Ahmed')
// Log the first name using the person method of the fName object
console.log(fName.person());

//Define a simple function that returns the provided first name
function person(firstName) {
     return firstName
}
// Log the string 'Ahmed'
console.log('Ahmed');


const a = 10;
const b = 5;
//Check a is greater than b
if(a > b){
   // Log true if a is greater than b
    console.log( a > b)
}else {
    console.log(`b is greater than a`)
}