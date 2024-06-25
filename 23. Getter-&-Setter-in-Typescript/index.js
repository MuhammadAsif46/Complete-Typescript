// Getter and Setter in typescipt:
// Bank Account Balance Task 1:
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this._balance = 0;
    }
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (newBalance) {
            if (newBalance < 0) {
                throw new Error("invalid balance");
            }
            this._balance = newBalance;
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}());
var account = new BankAccount();
// account.balance = -10; // answer :- "invalid balance"
account.balance = 10; //  answer :- 10
console.log(account.balance);
// Temperature Converter App Task 2:
var Temperature = /** @class */ (function () {
    function Temperature() {
        this._celsius = 0;
    }
    Object.defineProperty(Temperature.prototype, "celsius", {
        get: function () {
            return this._celsius;
        },
        set: function (newCelsius) {
            this._celsius = newCelsius;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Temperature.prototype, "fahrenheit", {
        get: function () {
            return (this._celsius * 9) / 5 + 32;
        },
        set: function (newFah) {
            this._celsius = ((newFah - 32) * 5) / 9;
        },
        enumerable: false,
        configurable: true
    });
    return Temperature;
}());
var temp = new Temperature();
temp.celsius = 25;
console.log(temp.fahrenheit);
