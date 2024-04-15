"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exfile1 = void 0;
// Define a class named exfile1
var exfile1 = /** @class */ (function () {
    // Constructor to initialize the class instance with a name
    function exfile1(name) {
        this.name = name;
    }
    //method to greet with name.
    exfile1.prototype.sayHello = function () {
        //Log a greeting message to the console
        console.log("Hello, ".concat(this.name));
    };
    return exfile1;
}());
exports.exfile1 = exfile1;
//Define a class named exfile2 export as default
var exfile2 = /** @class */ (function () {
    function exfile2(name) {
        this.name = name;
    }
    //method to greet with name.
    exfile2.prototype.sayWelcome = function () {
        //Log a message to the console
        console.log("Welcome, ".concat(this.name));
    };
    return exfile2;
}());
exports.default = exfile2;
