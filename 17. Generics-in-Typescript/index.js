// Generics in typescript allow you to create resuable components or functions
// that can works with multiple data types.
// getting error:
// const generics = (value: number | boolean): number | boolean => {
//   return value;
// };
// const numberRes = generics(32);
// const stringRes = generics("hello, Generics!");
// const booleanRes = generics(true);
// Genertics function to return a input value:
var generics = function (value) {
    return value;
};
// Using the generics function with different types:
var numberRes = generics(32);
var stringRes = generics("hello, Generics!");
var booleanRes = generics(true);
console.log(numberRes);
console.log(stringRes);
console.log(booleanRes);
// Generics multiple type variables:
var multipleGenerics = function (a, b, c) {
    console.log(typeof a);
    console.log(typeof b);
    // console.log(typeof c);
};
var multipleNumberRes = multipleGenerics(26, "Jhon", true);
var multipleStringRes = multipleGenerics("hello", 6, false);
