// How to create a class and also instance of class in typescript:
// A class in terms of OOP is a blueprint for creating objects:
// A class is like a blueprint for creating similar things:
// create class in TS:
var Persons = /** @class */ (function () {
    // create a constructor:
    function Persons(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    return Persons;
}());
// Intance of class in TS:
var persons1 = new Persons("Jhon", 19, ["reading", "writing"]);
var persons2 = new Persons("Elia", 21, ["coding", "palying"]);
var persons3 = new Persons("Smith", 31, ["leaning", "sleeping"]);
console.log(persons1.hobbies);
