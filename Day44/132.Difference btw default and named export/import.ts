//Coding challenge:Day44:

//Import the 'exfile1' class from export module.
import { exfile1 } from "./export";
//creating an instance of exfile1 named 'Ahmed'
const obj = new exfile1('Ahmed');
//Calling the method of exfile1 instance.
obj.sayHello();
//import the default class as default from exp module.
import exfile2 from "./export"
//creat an instance of defaultclass named 'Ahmed.
const obj2 = new exfile2('Ahmed');
//Call the method of defaultclass instance.
obj2.sayWelcome()