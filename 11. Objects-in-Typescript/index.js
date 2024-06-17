// Objects in Typescript:
// create a object:
var stdData = {
    name: "Jhon",
    age: 19,
    isStudent: true,
    address: {
        city: "karachi",
        country: "Pakistan",
    },
};
// Accessing the object data:
console.log("stdName ->", stdData.name);
console.log("stdCity ->", stdData.address.country);
// Updating object Properties:
console.log("stdName ->", (stdData.name = "Elia"));
console.log("stdAge ->", (stdData.age = 12));
