function setUsername(username) {
	this.username = username;
	console.log("called");
}
function createUser(username, email, password) {
	// Call the setUsername function with the input username, using the call method to set the value of this to the new user object
	setUsername.call(this, username);

	this.email = email;
	this.password = password;
}

const chai = new createUser("Mohit", "chai@fb.com", 123);
console.log(chai);
