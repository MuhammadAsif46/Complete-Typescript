"use strict";
// 1. Default Parameters Function:
Object.defineProperty(exports, "__esModule", { value: true });
var greet2 = function (name, id) {
    if (id === void 0) { id = 1; }
    return "Welcome, ".concat(name, " and your Id is ").concat(id);
};
var emp = greet2("hello", 2);
console.log(emp);
// 2. Optional Parameters Function:
var greet3 = function (name, id) {
    if (id) {
        return "Welcome, ".concat(name, " and your Id is ").concat(id);
    }
    else {
        return "Welcome, ".concat(name);
    }
};
var emp1 = greet3("hello");
console.log(emp1);
