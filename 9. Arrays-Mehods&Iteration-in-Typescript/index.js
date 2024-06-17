// Arrays in TypeScript come with built-in methods that allow you to perform common operation:
var fruits = ["apple", "banana", "orange", "mango"];
// a) Adding elements to an array using push:
var updatedFruits = fruits.push("grapes");
console.log(updatedFruits); //return array length
console.log(fruits);
// b) Removing elements from an array using pop:
var updatedFruits1 = fruits.pop();
console.log(updatedFruits1); //return remove value
console.log(fruits);
/* You can iterate over the elements of an array using various looping constructs
such as for, for...of, or array methods like forEach */
// Using for loop
for (var i = 0; i < fruits.length; i++) {
    var element = fruits[i];
    console.log(element);
}
// Using for...of loop
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var ele = fruits_1[_i];
    console.log("for.of ele->", ele);
}
// Using for...in loop
for (var ele in fruits) {
    console.log("for.in ele->", ele);
}
// Using forEach method
fruits.forEach(function (eachFruit) { return console.log("for Each result->", eachFruit); });
