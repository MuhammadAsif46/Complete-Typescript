// Static Properties and Methods in TypeScript:
var MathOperations = /** @class */ (function () {
    function MathOperations() {
    }
    MathOperations.add = function (n1, n2) {
        return n1 + n2;
    };
    MathOperations.subs = function (n1, n2) {
        return n1 - n2;
    };
    MathOperations.divide = function (n1, n2) {
        return n1 / n2;
    };
    MathOperations.multiply = function (n1, n2) {
        return n1 * n2;
    };
    MathOperations.modular = function (n1, n2) {
        return n1 % n2;
    };
    MathOperations.PI = Math.PI;
    return MathOperations;
}());
console.log(MathOperations.PI);
console.log(MathOperations.add(5, 10));
console.log(MathOperations.subs(10, 5));
console.log(MathOperations.divide(16, 4));
console.log(MathOperations.multiply(11, 6));
console.log(MathOperations.modular(50, 6));
