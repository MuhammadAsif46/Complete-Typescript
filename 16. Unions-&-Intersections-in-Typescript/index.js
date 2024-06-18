// Union and Intersections in Typescript:
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Union symbol in Typescipt represent | (pipe):
var inputValue = function (value) {
    console.log(value);
};
inputValue(44);
inputValue("user");
inputValue(false);
// Union task:
// func define:
var userInput = function (value) {
    if (typeof value === "number") {
        return value * 2;
    }
    else if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        throw new Error("Invalid input data");
    }
};
// func call:
console.log(userInput(8));
console.log(userInput("video"));
// company example :
var employee = {
    name: "Jhon",
    age: 30,
    emp_id: 123,
    department: "IT",
};
// house example:
var person = {
    name: "Jhon",
    age: 30,
};
var user = {
    name: "John",
    age: 34,
};
var address = {
    city: "Lahore",
    country: "Pakistan",
};
// type UserProfile = User & MyLocation;
var createUserProfile = function (user, address) {
    return __assign(__assign({}, user), address);
    // return `My name is ${user.name} and I am living in city: ${address.city}`;
};
var userCompleteInfo = createUserProfile(user, address);
// console.log(userCompleteInfo); // all data retrieve.
console.log("My name is ".concat(userCompleteInfo.name, " and I am living in city: ").concat(userCompleteInfo.city));
