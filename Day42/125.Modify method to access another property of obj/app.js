//Coding Challenge:Day42
//Define an object called 'personObject'
var personObject = {
    name: 'Sammad',
    age: 30,
    //Define 'objProp' method inside object called 'personObject'
    objProp: function () {
        //Return name and age properties of the object.
        return "Name: ".concat(this.name, "\n Age: ").concat(this.age);
    }
};
//Call 'objProp' method of the 'personObject',log to the console.
console.log(personObject.objProp());
