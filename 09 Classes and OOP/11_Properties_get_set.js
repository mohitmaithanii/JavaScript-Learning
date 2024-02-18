// property base getters or setters:

function User(email, password) {
	this._email = email;
	this._password = password;

	// email:
	Object.defineProperty(this, "email", {
		get: function () {
			return this._email.toUpperCase();
		},
		set: function (value) {
			this._email = value;
		},
	});

	// password:
	Object.defineProperty(this, "password", {
		get: function () {
			return this._password.toUpperCase();
		},
		set: function (value) {
			this._password = value;
		},
	});
}

const chai = new User("chai@chai.com", "chai");

console.log(chai.email);
