var assert = require("assert");
// ... Ton code ici ...
var BankCustomer = /** @class */ (function () {
    function BankCustomer(customer, creditCardCode) {
        this.customer = customer;
        this.creditCardCode = creditCardCode;
    }
    BankCustomer.prototype.getName = function () {
        return this.customer;
    };
    BankCustomer.prototype.verifyInput = function (input) {
        return input === this.creditCardCode;
    };
    return BankCustomer;
}());
// Tests
var customer = new BankCustomer("John Doe", "3579");
assert.equal(typeof customer.getName, "function");
assert.equal(typeof customer.verifyInput, "function");
assert.equal(customer.getName(), "John Doe");
assert.ok(customer.verifyInput("3579"));
