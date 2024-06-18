// Union and Intersections in Typescript:
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
// Intersection symbol in Typescipt represent & (ampersand):
