//coding Challenge:Day44

// Define a class named exfile1
export class exfile1{
// Constructor to initialize the class instance with a name
   constructor(private name:string){}
//method to greet with name.
   sayHello(){
//Log a greeting message to the console
    console.log(`Hello, ${this.name}`)
   }
}
//Define a class named exfile2 export as default
export default class exfile2{
   constructor(private name:string){}
//method to greet with name.
   sayWelcome(){
//Log a message to the console
       console.log(`Welcome, ${this.name}`)
   }
}
