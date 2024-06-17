// Call Signature in typescript:
var student1 = {
    stdName: "Bhai",
    age: 40,
    greet: function (country) { return "Welcome My name is ".concat(student1.stdName, ", I am ").concat(student1.age, " years old & I am from ").concat(country); }
};
var introduction = function (student1) {
    var stdName = student1.stdName, age = student1.age;
    return "Welcome My stdName is ".concat(stdName, ", I am ").concat(age, " years old");
};
// console.log(introduction(student1));
console.log(student1.greet("Pakistan"));
