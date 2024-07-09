// Static Properties and Methods in TypeScript:

class MathOperations {
  public static PI:number = Math.PI;

  public static add(n1: number, n2: number){
    return n1 + n2;
  }
  public static subs(n1: number, n2: number){
    return n1 - n2;
  }
  public static divide(n1: number, n2: number){
    return n1 / n2;
  }
  public static multiply(n1: number, n2: number){
    return n1 * n2;
  }
  public static modular(n1: number, n2: number){
    return n1 % n2;
  }
}

console.log(MathOperations.PI);
console.log(MathOperations.add(5,10));
console.log(MathOperations.subs(10,5));
console.log(MathOperations.divide(16,4));
console.log(MathOperations.multiply(11,6));
console.log(MathOperations.modular(50,6));
