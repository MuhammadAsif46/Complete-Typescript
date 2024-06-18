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

/* Intersection types allow you to combine multiple types into a single type. 
you use the & (ampersand) to define an intersection type. */

// define type Alias:
type Person = {
  name: string;
  age: number;
};

// define type Alias:
type Employee = {
  emp_id: number;
  department: string;
};

type EmployeeDetails = Person & Employee;

// company example :
const employee: EmployeeDetails = {
  name: "Jhon",
  age: 30,
  emp_id: 123,
  department: "IT",
};

// house example:

const person: Person = {
  name: "Jhon",
  age: 30,
};
