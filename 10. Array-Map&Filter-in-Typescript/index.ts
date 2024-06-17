// Map and filter Method un typescript:

const numbers:number[] = [1, 2, 3, 4, 5];


// Map Method:

// 1. Doubling each number.

const doubleData:number[] = numbers.map((val:number) => val * 2)
console.log(doubleData);

// 2. Converting number to strings.

const numberToString:string[] = numbers.map((val:number) => val.toString())
console.log(numberToString);


// Filter Method:

// 1. Filtering even number.

const evenNumber:number[] = numbers.filter((val:number) => val % 2 === 0);
console.log(evenNumber);


// 2. Filtering number greater than 3.

const greaterToThree:number[] = numbers.filter((val:number) => val > 3 );
console.log(greaterToThree);