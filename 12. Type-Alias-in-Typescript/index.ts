// To define a type alias, you use the type keyword followed by the alias name and the type definition:

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address: {
    city: string;
    country: string;
  };
};

// create a object:
let person: Person = {
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

// Alias task :

/* Define an interface or type representing a product with properties for name,
price and quantity. */
// name: "Laptop"
// price: "1000"
// quantity: "5"

// Create product type:
type Product = {
  name: string;
  price: number;
  quantity: number;
};

const product:Product = {
  name: "Laptop",
  price: 1000,
  quantity: 5,
};


/* Calculate the product object from the previous question, write a function called 
calculateTotalPrice that calculates and returns the total price (price * quantity)
of the product. */

const calculateTotalPrice = (product:Product) => {
  return `${product.name} each price ${product.price} and quantity ${product.quantity}, total cost of all ${product.name} is ${product.price * product.quantity}`
}

console.log(calculateTotalPrice(product));


