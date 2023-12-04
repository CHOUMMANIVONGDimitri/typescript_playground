const assert = require('assert');

// ... Ton code ici ...
class BankCustomer {
	private customer: string;
	private creditCardCode: string;
	
	constructor(customer: string, creditCardCode: string) {
		this.customer = customer;
		this.creditCardCode = creditCardCode;
	}

	public getName(): string {
		return this.customer;
	}

	public verifyInput(input: string): boolean {
		return input === this.creditCardCode;
	}
};
// Tests

const customer = new BankCustomer('John Doe', '3579');

assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyInput('3579'));
