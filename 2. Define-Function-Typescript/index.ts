// TODO 1 : Write a program to add two numbers?
// TODO 2 : How to catch Error and solve it?
// TODO 3 : TS  Configuration file

// func define expample 1:

const sum = (a:number,b:number):number => {
    return a + b;
}

// func call:
console.log(sum(1,2));


// func define example 2:
// function greet(name:string,id:number) {
//     console.log(`Welcome, ${name} and your id is ${id}`);
    
// }

// func call:
// greet("Smith",1)


// func define example 2 with Arrow function:
const greet = (name:string,id:number):string => `Welcome, ${name} and your id is ${id}`


// func call:
let user:string = greet("Smith",1)
console.log(user);


// Function Task:

const isPalindrome = (palin:string):boolean =>{
    let myPalin = palin.split("").reverse().join("");
    return myPalin === palin
}


let checkPalinValue = isPalindrome("12321");
console.log(checkPalinValue);

