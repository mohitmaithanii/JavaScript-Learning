const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

/* 
console.log(Math.PI);
Math.PI = 5
console.log(Math.PI); */

const chai = {
	name: "ginger chai",
	price: "260",
	isAvailable: true,
};

Object.defineProperty(chai, "name", {
	writable: false,
	enumerable: false,

	orderChai: function () {
		console.log("Chai not made");
	},
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
	if (typeof value !== "function") {
		console.log(`${key}: ${value}`);
	}
}
