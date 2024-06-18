// Interface in Typescript:
function greet(person) {
    return "Hello " + person.name;
}
;
var product = {
    name: "Laptop",
    price: 2000,
    quantity: 7,
};
var product2 = {
    name: "PC",
    price: 20000,
    quantity: 4,
};
/* Calculate the product object from the previous question, write a function called
calculateTotalPrice that calculates and returns the total price (price * quantity)
of the product. */
var calculateTotalPrice = function (product) {
    return "".concat(product.name, " each price ").concat(product.price, " and quantity ").concat(product.quantity, ", total cost of all ").concat(product.name, " is ").concat(product.price * product.quantity);
};
console.log(calculateTotalPrice(product));
console.log(calculateTotalPrice(product2));
