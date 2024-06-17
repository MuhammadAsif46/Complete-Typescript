// Map and filter Method un typescript:
var numbers = [1, 2, 3, 4, 5];
// Map Method:
// 1. Doubling each number.
var doubleData = numbers.map(function (val) { return val * 2; });
console.log(doubleData);
// 2. Converting number to strings.
var numberToString = numbers.map(function (val) { return val.toString(); });
console.log(numberToString);
// Filter Method:
// 1. Filtering even number.
var evenNumber = numbers.filter(function (val) { return val % 2 === 0; });
console.log(evenNumber);
// 2. Filtering number greater than 3.
var greaterToThree = numbers.filter(function (val) { return val > 3; });
console.log(greaterToThree);
