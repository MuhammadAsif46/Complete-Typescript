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
const generics = <G>(value: G): G => {
  return value;
};

// Using the generics function with different types:
const numberRes = generics<number>(32);
const stringRes = generics<string>("hello, Generics!");
const booleanRes = generics<boolean>(true);

console.log(numberRes);
console.log(stringRes);
console.log(booleanRes);

// Generics multiple type variables:

const multipleGenerics = <G, M>(a: G, b: M, c: boolean) => {
  console.log(typeof a);
  console.log(typeof b);
  // console.log(typeof c);
};

const multipleNumberRes = multipleGenerics<number, string>(26, "Jhon", true);
const multipleStringRes = multipleGenerics<string, number>("hello", 6, false);
