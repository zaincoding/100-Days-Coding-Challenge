//Coding Challenge:Day42

//Define an object called 'personObject'
const personObject = {
    name:'Sammad',
    age: 30,
//Define 'objProp' method inside object called 'personObject'
    objProp: function (){
 //Return name and age properties of the object.
     return `Name: ${this.name}\n Age: ${this.age}`
      
  }
 
 }
 //Call 'objProp' method of the 'personObject',log to the console.
 console.log(personObject.objProp())
 
 