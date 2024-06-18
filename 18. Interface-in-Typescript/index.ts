// Interface in Typescript:

// Define object with Interface: updated part.
interface Person {
  name: string;
  age: number;
}
 
function greet(person: Person) {
  return "Hello " + person.name;
}


// define object with Alias: 

// type Person = {
//   name: string;
//   age: number;
// };
 
// function greet(person: Person) {
//   return "Hello " + person.name;
// }

// Define object with Javascript:

// function greet(person: { name: string; age: number }) {
//   return "Hello " + person.name;
// } 


// Interface task :

/* Define an interface or type representing a product with properties for name,
price and quantity. Create a product object with the following data. */

// name: "Laptop"
// price: "2000"
// quantity: "7"

// Create product interface:
interface Product {
  name: string;
  price: number;
  quantity: number;
}; 

const product:Product = {
  name: "Laptop",
  price: 2000,
  quantity: 7,
};
const product2:Product = {
  name: "PC",
  price: 20000,
  quantity: 4,
};


/* Calculate the product object from the previous question, write a function called 
calculateTotalPrice that calculates and returns the total price (price * quantity)
of the product. */

const calculateTotalPrice = (product:Product) => {
  return `${product.name} each price ${product.price} and quantity ${product.quantity}, total cost of all ${product.name} is ${product.price * product.quantity}`
}

console.log(calculateTotalPrice(product));
console.log(calculateTotalPrice(product2));