// Access Modifiers in TypeScript:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//              | Parent class  | Child class  | Outside class  |
//              | ------------- | ------------ | -------------  |
//     Public   |  ✅          |   ✅         |  ✅           |
//  Protected   |  ✅          |   ✅         |  ❌           |
//    Private   |  ✅          |   ❌         |  ❌          |
// Parent class:
var Persons = /** @class */ (function () {
    // create a constructor:
    function Persons(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    return Persons;
}());
// Child class:
// Inheritance create with extend keyword:
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(name, age, hobbies, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.grade = grade;
        return _this;
    }
    return Students;
}(Persons));
// Outside class:
// Intance of class in TS:
var persons1 = new Persons("Jhon", 19, ["reading", "writing"]);
var persons2 = new Persons("Elia", 21, ["coding", "palying"]);
var students1 = new Students("Smith", 31, ["leaning", "sleeping"], 9);
console.log(students1.name);
console.log(students1.grade);
console.log(students1.age);
