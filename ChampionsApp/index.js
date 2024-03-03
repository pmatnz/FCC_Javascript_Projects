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

// Create variables that create DB tables
const app = initializeApp(appSettings);
const database = getDatabase(app);
const username = ref(database, "username");
const password = ref(database, "password");
const email = ref(database, "email");

//******************/ ACESSING DOM*********************
const usernameBtn = document.getElementById("username");
const passwordBtn = document.getElementById("password");
const loginBtn = document.getElementById("loginButton");
const emailAddress = document.getElementById("email");
const registerbtn = document.getElementById("register");

//**************JS CODE*******************/
registerbtn.addEventListener("click", function () {
	//??????NEED TO ADD IF STATEMENT TO ENSURE VALUES HAVE BEEN ENTERED,USE POPUP IF NOT???????????
	Promise;
	let userNameinfo = usernameBtn.value;
	let passwordinfo = passwordBtn.value;
	let emailinfo = emailAddress.value;
	push(username, userNameinfo);
	push(password, passwordinfo);
	push(email, emailinfo);
	window.location.href = "http://127.0.0.1:5500/ChampionsApp/champions.html";
});

loginBtn.addEventListener("click", function () {
	window.location.href = "http://127.0.0.1:5500/ChampionsApp/login.html";
});
