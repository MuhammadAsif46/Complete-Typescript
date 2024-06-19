// How to create a class and also instance of class in typescript:

// A class in terms of OOP is a blueprint for creating objects:
// A class is like a blueprint for creating similar things:

// create class in TS:

class Persons {
  name: string = "Jhon";
  age: number = 19;
  hobbies: string[] = ["reading","writing"];
}

// Intance of class in TS:
const persons1:Persons = new Persons();
console.log(persons1);

