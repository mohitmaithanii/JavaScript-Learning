// Inheritance:

class User {
	constructor(username) {
		this.username = username;
	}
	logMe() {
		console.log(`USERNAME is ${this.username}`);
	}
}
class Teacher extends User {
	constructor(username, email, password) {
		super(username);
		this.email = email;
		this.password = password;
	}

	addCourse() {
		console.log(`new course was added by ${this.username}`);
	}
}

const chai = new Teacher("chai", "chai@Teacher.com", "134");
chai.addCourse();
chai.logMe();

const tea = new User("tea");
tea.logMe();

console.log(chai instanceof User);
