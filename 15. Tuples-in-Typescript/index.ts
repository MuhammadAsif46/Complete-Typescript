// What is Tuples in Typescript:

/* let's consider a scenario where you want to represent a person's basic information,
whether their name,age and whether they have a driver's license. Using a tuple can be
appropriate choice because these three elements have a specific order and type.  */

// simple JS array example:
// const arr = ["pakistan","india","bangladesh","srilanka","china"];

// Defining a tuple type for person information:
type PersonInfo = [string, number, boolean];

// Example usage:
// const person1:PersonInfo = [21,"Jhon",false] // type error in tuple but array is not checking.
const person1: PersonInfo = ["Jhon", 21, true];
const person2: PersonInfo = ["Elia", 28, false];

// Function to display person information:
const displayPersonInfo = (person: PersonInfo) => {
  const [name, age, hasDrivingLicense] = person;
  console.log(
    `Name: ${name} and Age: ${age} and Drive License: ${
      hasDrivingLicense ? "Yes" : "No"
    }`
  );
};

// func call:
displayPersonInfo(person1);
displayPersonInfo(person2);
