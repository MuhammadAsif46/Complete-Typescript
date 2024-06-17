// 1. Default Parameters Function:

const greet2 = (name: string, id: number = 1) => {
  return `Welcome, ${name} and your Id is ${id}`;
};
let emp = greet2("hello", 2);
console.log(emp);

export {};

// 2. Optional Parameters Function:

const greet3 = (name: string, id?: number) => {
  if (id) {
    return `Welcome, ${name} and your Id is ${id}`;
  } else {
    return `Welcome, ${name}`;
  }
};
let emp1 = greet3("hello");
console.log(emp1);

export {};
