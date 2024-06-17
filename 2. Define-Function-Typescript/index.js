// TODO 1 : Write a program to add two numbers?
// TODO 2 : How to catch Error and solve it?
// TODO 3 : TS  Configuration file
// func define expample 1:
var sum = function (a, b) {
    return a + b;
};
// func call:
console.log(sum(1, 2));
// func define example 2:
// function greet(name:string,id:number) {
//     console.log(`Welcome, ${name} and your id is ${id}`);
// }
// func call:
// greet("Smith",1)
// func define example 2 with Arrow function:
var greet = function (name, id) { return "Welcome, ".concat(name, " and your id is ").concat(id); };
// func call:
var user = greet("Smith", 1);
console.log(user);
// Function Task:
var isPalindrome = function (palin) {
    var myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
};
var checkPalinValue = isPalindrome("12321");
console.log(checkPalinValue);
