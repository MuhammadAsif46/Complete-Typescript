// Arrays in TypeScript come with built-in methods that allow you to perform common operation:

const fruits: string[] = ["apple","banana","orange","mango"];

// a) Adding elements to an array using push:

const updatedFruits = fruits.push("grapes");
console.log(updatedFruits); //return array length
console.log(fruits);


// b) Removing elements from an array using pop:

const updatedFruits1 = fruits.pop();
console.log(updatedFruits1); //return remove value
console.log(fruits);


/* You can iterate over the elements of an array using various looping constructs 
such as for, for...of, or array methods like forEach */

// Using for loop

for (let i = 0; i < fruits.length; i++) {
    const element = fruits[i];
    console.log(element);
}

// Using for...of loop

for (const ele of fruits) {
    console.log("for.of ele->", ele);    
}
// Using for...in loop
for (const ele in fruits) {
    console.log("for.in ele->",ele);    
}
// Using forEach method

fruits.forEach(eachFruit => console.log("for Each result->",eachFruit));