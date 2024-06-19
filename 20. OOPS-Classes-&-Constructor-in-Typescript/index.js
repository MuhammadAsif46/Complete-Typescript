// How to create a class and also instance of class in typescript:
// A class in terms of OOP is a blueprint for creating objects:
// A class is like a blueprint for creating similar things:
// create class in TS:
var Persons = /** @class */ (function () {
    function Persons() {
        this.name = "Jhon";
        this.age = 19;
        this.hobbies = ["reading", "writing"];
    }
    return Persons;
}());
// Intance of class in TS:
var persons1 = new Persons();
console.log(persons1);
