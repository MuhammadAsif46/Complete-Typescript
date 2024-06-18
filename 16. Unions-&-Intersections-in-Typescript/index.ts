// Union and Intersections in Typescript:

// Union symbol in Typescipt represent | (pipe):

const inputValue = (value: string | number | boolean) => {
  console.log(value);
};

inputValue(44);
inputValue("user");
inputValue(false);

// Union task:

// func define:
const userInput = (value: string | number): string | number => {
  if (typeof value === "number") {
    return value * 2;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    throw new Error("Invalid input data");
  }
};

// func call:
console.log(userInput(8));
console.log(userInput("video"));

// Intersection symbol in Typescipt represent & (ampersand):
