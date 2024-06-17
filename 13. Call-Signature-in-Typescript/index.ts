// Call Signature in typescript:

type Student = {
  stdName: string;
  age: number;
  gender?: string;
  greet: (country:string) => string; // method call signature
}

const student1:Student = {
  stdName: "Bhai",
  age: 40,
  greet: (country):string => `Welcome My name is ${student1.stdName}, I am ${student1.age} years old & I am from ${country}`
}

const introduction = (student1:Student) => {
  const {stdName, age} = student1;
  return `Welcome My stdName is ${stdName}, I am ${age} years old`;
}

// console.log(introduction(student1));
console.log(student1.greet("Pakistan"));

