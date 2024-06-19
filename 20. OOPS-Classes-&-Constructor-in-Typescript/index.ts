// How to create a class and also instance of class in typescript:

// A class in terms of OOP is a blueprint for creating objects:
// A class is like a blueprint for creating similar things:

// create class in TS:

class Persons {
  name: string;
  age: number;
  hobbies: string[];
  // create a constructor:
  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
}

// Intance of class in TS:
const persons1: Persons = new Persons("Jhon", 19, ["reading", "writing"]);
const persons2: Persons = new Persons("Elia", 21, ["coding", "palying"]);
const persons3: Persons = new Persons("Smith", 31, ["leaning", "sleeping"]);
console.log(persons1.hobbies);
