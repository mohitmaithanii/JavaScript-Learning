// 1: Creating and consuming a Promise:
const promiseOne = new Promise((resolve, reject) => {
	// Do and async task
	// DB calls, cryptography, network
	setTimeout(() => {
		console.log("Async task is complete");
		resolve();
	}, 1000);
});

promiseOne.then(() => {
	console.log("Promise consumed");
});

// 2: Promise with an immediately resolved value:
new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Async task two");
		resolve();
	}, 1000);
}).then(() => {
	console.log("Async two resolved");
});

// 3: Promise with a resolved value:
const promiseThree = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({ username: "Mohit", id: 21212 });
	}, 1000);
});

promiseThree.then((user) => {
	console.log(user);
});

// 4: Promise with a rejected value:
const promiseFour = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = true;
		// If an error is truthy, the Promise is rejected.
		if (!error) {
			resolve({ username: "Mohit", password: 1234 });
		} else {
			reject("ERROR: Something went wrong!");
		}
	}, 1000);
});

const username = promiseFour
	.then((user) => {
		console.log(user);
		return user.username;
	})
	.then((username) => {
		console.log(username);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		console.log("the promise is ether resolved or rejected");
	});

// 5: Promise using async/await:
const promiseFive = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = true;
		if (!error) {
			resolve({ username: "Javascript", password: 1234 });
		} else {
			reject("ERROR: JS went wrong!");
		}
	}, 1000);
});

async function consumePromiseFive() {
	try {
		const response = await promiseFive;
		console.log(response);
	} catch (error) {
		console.log(error);
	}
}
// If the Promise is rejected, the error is caught and logged.
consumePromiseFive();

// Fetch API example:
fetch("https://api.github.com/users/mohitmaithanii")
	.then((response) => {
		// The response is then parsed as JSON
		return response.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log(error);
	});
