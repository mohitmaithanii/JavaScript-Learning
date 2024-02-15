// 1:
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

// 2:
new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Async task two");
		resolve();
	}, 1000);
}).then(() => {
	console.log("Async two resolved");
});

// 3:
const promiseThree = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({ username: "Mohit", id: 21212 });
	}, 1000);
});

promiseThree.then((user) => {
	console.log(user);
});

// 4:
const promiseFour = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = true;
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

// 5: async await:
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

consumePromiseFive();

// fetch:
fetch("https://api.github.com/users/mohitmaithanii")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log(error);
	});
