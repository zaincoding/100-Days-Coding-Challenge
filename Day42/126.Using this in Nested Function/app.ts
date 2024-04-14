//Coding Challenge:Day 42

//Define an object called 'person'.
const person = {
    name:'Sammad',
//Define 'objPrpp' function.
    objProp: function (){
 //log the value of the 'name' property to the console.
     console.log(`${this.name}`);

//Define a nested function within the object.
function NestedFunction(){
 // Attempt to print a person's name,
 // but 'this' does not refer to the 'person' object here 
  return console.log(`${this.name}`)
}
 //call the 'nestedFunction' function.
 // this will log "undefined" in strict mode,
 // or the global object's name if not in strict mode
    NestedFunction();     
  }
 };
 //Call 'objPorp' method of the object.
 person.objProp()