// let myName = "Mohit    ";
// let myEmail = "mohit@google.com    ";

// console.log(myName.trueLength);

let myHeros = ["thor", "superman"];

let heroPower = {
	thor: "thunder",
	superman: "strength",

	getSupermanPower: function () {
		console.log(`Superman power is ${this.superman}`);
	},
};

Object.prototype.Mohit = function () {
	console.log(`Mohit is present in all object.`);
};

Array.prototype.heyMohit = function () {
	console.log(`Mohit says hello!`);
};

// heroPower.Mohit()
// myHeros.Mohit();
// myHeros.heyMohit();
// heroPower.heyMohit();

//* inheritance:

const User = {
	name: "Mohit",
	email: "xyz@gmail.com",
};

const Teacher = {
	makeVideo: true,
};

const TeachingSupport = {
	isAvailable: false,
};

const TASupport = {
	makeAssignment: "Js assignment",
	fullTime: true,
	__proto__: TeachingSupport,
};

Teacher.__proto__ = User;

//* modern syntax:

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "Mohit    ";

String.prototype.trueLength = function () {
	console.log(`${this}`);

	console.log(`True length is ${this.trim().length}`);
};

anotherUserName.trueLength();
"Mohit".trueLength();
"chaiAurCode".trueLength();
