// Getters or Setters:

class User {
	constructor(email, password) {
		this.email = email;
		this.password = password;
	}
	// email:
	get email() {
		return this._email.toUpperCase();
	}
	set email(value) {
		this._email = value;
	}

	// password:
	get password() {
		return `${this._password}Mohit`;
	}
	set password(value) {
		this._password = value;
	}
}

const Mohit = new User("M@gmail.com", "abc");
console.log(Mohit.password);
console.log(Mohit.email);
