"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class1 = void 0;
var class1 = /** @class */ (function () {
    function class1(name) {
        this.name = name;
    }
    class1.prototype.Greets = function () {
        console.log("Hell, ".concat(this.name));
    };
    return class1;
}());
exports.class1 = class1;
