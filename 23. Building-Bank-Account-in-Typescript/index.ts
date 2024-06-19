// Bank Account Balance:

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
