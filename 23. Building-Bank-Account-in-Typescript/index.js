// Bank Account Balance:
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
