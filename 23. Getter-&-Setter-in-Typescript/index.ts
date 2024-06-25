// Getter and Setter in typescipt:

// Bank Account Balance Task 1:

class BankAccount {
  private _balance:number = 0;

  public get balance() {
    return this._balance;
  }

  public set balance(newBalance:number) {
    if (newBalance < 0) {
      throw new Error ("invalid balance");
    }
    this._balance = newBalance;
  }
}

const account = new BankAccount()
// account.balance = -10; // answer :- "invalid balance"
account.balance = 10;    //  answer :- 10
console.log(account.balance);


// Temperature Converter App Task 2:

class Temperature{
  private _celsius:number = 0;

  public get celsius(){
    return this._celsius;
  }
  
  public set celsius(newCelsius:number){
    this._celsius = newCelsius;
  }

  public get fahrenheit(){
    return (this._celsius * 9) / 5 + 32;
  }

  public set fahrenheit(newFah:number){
    this._celsius = ((newFah - 32) * 5)/9;
  }
}  

const temp = new Temperature();
temp.celsius = 25;
console.log(temp.fahrenheit);

