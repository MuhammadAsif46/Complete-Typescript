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
