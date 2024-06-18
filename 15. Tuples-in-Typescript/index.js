// What is Tuples in Typescript:
// Example usage:
// const person1:PersonInfo = [21,"Jhon",false] // type error in tuple but array is not checking.
var person1 = ["Jhon", 21, true];
var person2 = ["Elia", 28, false];
/* "You can use arrays for this task, but you have to avoid doing this with tuples.
 This is why we have a readonly property that TypeScript provides. We define it for this reason.*/
// person1.push("coding");
// console.log(person1);
// Function to display person information:
var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], hasDrivingLicense = person[2];
    console.log("Name: ".concat(name, " and Age: ").concat(age, " and Drive License: ").concat(hasDrivingLicense ? "Yes" : "No"));
};
// func call:
displayPersonInfo(person1);
displayPersonInfo(person2);
