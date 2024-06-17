// Boolean Type:

let isDone: boolean = true;
let hasStarted: boolean = false;

// Boolean Task:

// create a simple function and find the provided number is even or not
const isEven = (val: number): boolean => {
  return val % 2 === 0;
};

console.log(isEven(3));


// Bigint Type:
// 2^53 or 2**53 sy upper value pr Javascript error deta hai.
let myBigintNum:bigint = 9007199254740992n;
console.log(myBigintNum);

let myAnotherBigintNum:bigint = BigInt("90071992547409923");;
console.log(myAnotherBigintNum);

// Bigint Task:
let sum = myBigintNum + myAnotherBigintNum
console.log("sum ->", sum);




export {};
