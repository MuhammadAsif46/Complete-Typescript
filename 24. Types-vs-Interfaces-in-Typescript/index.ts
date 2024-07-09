// Interface VS Type:

// type Stud = {
//   name: string;
//   age: number;
// };

// type StudAddr = {
//   city: string;
//   country: string;
// };

// type Data = Stud & StudAddr;

// const BioData: Data = {
//   name: "Jhon",
//   age: 12,
//   city: "Karachi",
//   country: "UK",
// };

// console.log(BioData);

interface Stud {
  name: string;
  age: number;
};

interface StudAddr  {
  city: string;
  country: string;
};

interface Data extends Stud , StudAddr {}

const BioData: Data = {
  name: "Jhon",
  age: 12,
  city: "Karachi",
  country: "UK",
};

console.log(BioData);

