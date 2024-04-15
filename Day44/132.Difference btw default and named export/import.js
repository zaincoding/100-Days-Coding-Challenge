"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Import the 'exfile1' class from export module.
var export_1 = require("./export");
//creating an instance of exfile1 named 'Ahmed'
var obj = new export_1.exfile1('Ahmed');
//Calling the method of exfile1 instance.
obj.sayHello();
//import the default class as default from exp module.
var export_2 = require("./export");
//creat an instance of defaultclass named 'Ahmed.
var obj2 = new export_2.default('Ahmed');
//Call the method of defaultclass instance.
obj2.sayWelcome();
