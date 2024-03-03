//********************FIREBASE DATABASE INFO************************************//
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"; // importing firebase code
import {
	getDatabase,
	ref,
	push,
	onValue,
	remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
	databaseURL:
		"https://champions-d493c-default-rtdb.asia-southeast1.firebasedatabase.app/",
}; // link to my personal Datbase

// Create variables to use database
const app = initializeApp(appSettings);
const database = getDatabase(app);
const username = ref(database, "username");
const password = ref(database, "password");
const emailAddress = ref(database, "email");

//******************/ ACESSING DOM*********************
const usernameBtn = document.getElementById("username-input");
const passwordBtn = document.getElementById("password-input");
const loginBtn = document.getElementById("submit-btn");
const cancelBtn = document.getElementById("cancel-btn");
let registerbtn = document.getElementById("register");

//**************JS CODE*******************/

onValue(emailAddress, function (snapshot) {
	let emailsArray = Object.entries(snapshot.val());
	for (let i = 0; i < emailsArray.length; i++) {
		let currentEmail = emailsArray[i];
		getCurrentemail(currentEmail);
	}
});

onValue(username, function (snapshot) {
	let userNameArray = Object.entries(snapshot.val());
	for (let i = 0; i < userNameArray.length; i++) {
		let currentUsername = userNameArray[i];
		getCurrentUsername(currentUsername);
	}
});

onValue(password, function (snapshot) {
	let passwordArray = Object.entries(snapshot.val());
	for (let i = 0; i < passwordArray.length; i++) {
		let currentpassword = passwordArray[i];
		getCurrentPassword(currentpassword);
	}
});

//**********EVENTLISTNERS***************/

//No longer required, used "reset" as type on cancel button
/*cancelBtn.addEventListener("click", function () {
	usernameBtn.value = "";
	passwordBtn.value = "";
	loginBtn.textContent = "Login";
}); */

registerbtn.addEventListener("click", function () {
	window.location.href = "http://127.0.0.1:5500/ChampionsApp/index.html";
});

//**********Functions***************/

function getCurrentemail(email) {
	let currentEmail = email[1];
	console.log(currentEmail);
}

function getCurrentUsername(userName) {
	let currentUsername = userName[1];
	loginBtn.addEventListener("click", function () {
		const enteredUsername = usernameBtn.value; // Get the value entered by the user

		// Check if the entered username exists in the database
		onValue(username, function (snapshot) {
			const usernames = Object.values(snapshot.val()); // Get an array of usernames from the database
			if (usernames.includes(enteredUsername)) {
				window.location.href =
					"http://127.0.0.1:5500/ChampionsApp/champions.html";
			} else {
				loginBtn.textContent = "Error, please Register";
			}
		});
	});
}

function getCurrentPassword(passWord) {
	let currentPassword = password[1];
	loginBtn.addEventListener("click", function () {
		const enteredPassword = passwordBtn.value; // Get the value entered by the user

		// Check if the entered username exists in the database
		onValue(password, function (snapshot) {
			const passwords = Object.values(snapshot.val()); // Get an array of usernames from the database
			if (passwords.includes(enteredPassword)) {
				window.location.href =
					"http://127.0.0.1:5500/ChampionsApp/champions.html";
			} else {
				loginBtn.textContent = "Error, please Register";
			}
		});
	});
}
