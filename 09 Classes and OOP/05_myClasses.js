// ES6 : Classes

class User {
	constructor(username, email, password) {
		this.username = username;
		this.email = email;
		this.password = password;
	}
	encryptPassword() {
		return `${this.password}abc`;
	}
	changeUsername() {
		return `${this.username.toUpperCase()}`;
	}
}

const Chai = new User("chai", "chai@gmail.com", "123");

console.log(Chai.encryptPassword());
console.log(Chai.changeUsername());

// behind the scene:

function User(username, email, password) {
	this.username = username;
	this.email = email;
	this.password = password;
}

User.prototype.encryptPassword = function () {
	return `${this.password}abc`;
};

User.prototype.changeUsername = function () {
	return `${this.username.toUpperCase()}`;
};
const tea = new User("tea", "tea@gmail.com", "232");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
