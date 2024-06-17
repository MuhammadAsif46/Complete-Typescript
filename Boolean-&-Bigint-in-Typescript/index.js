"use strict";
// Boolean Type:
Object.defineProperty(exports, "__esModule", { value: true });
var isDone = true;
var hasStarted = false;
// Boolean Task:
// create a simple function and find the provided number is even or not
var isEven = function (val) {
    return val % 2 === 0;
};
console.log(isEven(3));
// Bigint Type:
// 2^53 or 2**53 sy upper value pr Javascript error deta hai.
var myBigintNum = 9007199254740992n;
console.log(myBigintNum);
var myAnotherBigintNum = BigInt("90071992547409923");
;
console.log(myAnotherBigintNum);
// Bigint Task:
var sum = myBigintNum + myAnotherBigintNum;
console.log("sum ->", sum);
