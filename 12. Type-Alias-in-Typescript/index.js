// To define a type alias, you use the type keyword followed by the alias name and the type definition:
// create a object:
var person = {
    name: "Jhon",
    age: 19,
    isStudent: true,
    address: {
        city: "karachi",
        country: "Pakistan",
    },
};
// Accessing the object data:
console.log("person ->", person.name);
console.log("person ->", person.address.country);
// Updating object Properties:
console.log("person->", (person.name = "Elia"));
console.log("person->", (person.age = 12));
var product = {
    name: "Laptop",
    price: 1000,
    quantity: 5,
};
/* Calculate the product object from the previous question, write a function called
calculateTotalPrice that calculates and returns the total price (price * quantity)
of the product. */
var calculateTotalPrice = function (product) {
    return "".concat(product.name, " each price ").concat(product.price, " and quantity ").concat(product.quantity, ", total cost of all ").concat(product.name, " is ").concat(product.price * product.quantity);
};
console.log(calculateTotalPrice(product));
