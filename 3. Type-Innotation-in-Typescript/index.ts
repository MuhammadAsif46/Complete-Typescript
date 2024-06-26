/*  In Typescript, type annotation is a way of explicitly specifying
the type of a variable, function parameters or function return value. */

let myFavNum: number = 10;
let myName: string = "Jhon";
let isLoggedIn: boolean = false;

// Number Type:

let myNumber: number = 5;
let myAge: number = 20;
let pi: number = 3.123;
let myNegVal: number = -8;

// String Type:

let myFirstName: string = "Asif"
let myLastName: string = 'Ahmed'
let myFullName =  myFirstName + " " + myLastName
console.log(myFullName);

// String Task 1:
// create a simple string variable in a sentence and find the length of the string variable?

let sentence:string = "My first sentence is completed";
let sentenceLength:number = sentence.length;
console.log(sentenceLength);

// String Task 2:
// create a simple 2 string variables to to convert in upper and lower case letters;

let upperCase:string = "hello world"
console.log(upperCase.toUpperCase());

let lowerCase:string = "WORLD HELLO"
console.log(lowerCase.toLowerCase());

export{}
