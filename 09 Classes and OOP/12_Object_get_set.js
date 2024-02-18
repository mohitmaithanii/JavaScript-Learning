// Object base getters or setters:

const User = {
	_email: "m@gmail.com",
	_password: "abc",

	// email:
	get email() {
		return this._email.toUpperCase();
	},
	set email(value) {
		this._email == value;
	},
};

// factory function:
const tea = Object.create(User);
console.log(tea.email);
