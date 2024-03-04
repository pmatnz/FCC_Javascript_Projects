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
const endorsments = ref(database, "Endorsments");
//***************************DOMSBELOW*************************************//

const publishButton = document.getElementById("endorse-button");
const inputText = document.getElementById("endorse-text");
const endorseList = document.getElementById("list-inputs");
const noEndors = document.getElementById("empty");
const toInput = document.getElementById("to-button");
const fromInput = document.getElementById("from-button");
const logoutBtn = document.getElementById("logout");

//*************CODE BODY AN FUNCTIONS***********************
// checking if DB has values, converts snapshot into an array
onValue(endorsments, function (snapshot) {
	// getting DB input
	endorseList.innerHTML = ""; //this clears the list on each loop
	noEndors.textContent = "";
	if (snapshot.exists()) {
		// checks if the db has any value
		let endorsArray = Object.entries(snapshot.val());

		for (let i = 0; i < endorsArray.length; i++) {
			let currentItem = endorsArray[i];
			let endorsValue = endorsArray[0];
			let endorsKey = endorsArray[1];
			publishEndors(currentItem);
		}
	} else {
		endorseList.innerHTML = "";
		noEndors.textContent = "No endorsments yet..";
	}
});

// push userinput into DB
/*??????????look at changing this "loginForm.addEventListener('submit', function(e){
    e.preventDefault()
}) ??????????????????????????
*/
publishButton.addEventListener("click", function (event) {
	if (
		inputText.value === "" ||
		toInput.value === "" ||
		fromInput.value === ""
	) {
		event.preventDefault(); // prevents button being pressed
		alert("Please fill in all input fields before publishing.");
		return;
	} else {
		let userInput = inputText.value;
		push(endorsments, userInput);
		clearUserInput();
	}
});

// clears the input text from the last entered message
function clearUserInput() {
	inputText.value = "";
	toInput.value = "";
	fromInput.value = "";
}

//grabs current DB value or key, creates an li element, and appends it to the list and displays it
function publishEndors(input) {
	let endorsKey = input[0];
	let endorsValue = input[1];
	let inputToName = toInput.value;
	let inputFromName = fromInput.value;

	let li = document.createElement("li");
	li.innerHTML = `
	<div> 
		<h4>To ${inputToName} </h4> 
		<p id="pvalue">${endorsValue}</p> 
		<h4 id="from" required>From ${inputFromName}</h4>
		<p class="emoji">&#x1F499;</p>
		<p class="count">0</p>
	</div>`;

	if (endorseList.firstChild) {
		endorseList.insertBefore(li, endorseList.firstChild);
	} else {
		endorseList.appendChild(li);
	}

	li.addEventListener("dblclick", function () {
		let exactLocationInDB = ref(database, `Endorsments/${endorsKey}`);
		remove(exactLocationInDB);
	});

	let emoji = li.querySelector(".emoji");
	let counter = li.querySelector(".count");
	emoji.addEventListener("click", function () {
		let currentCount = Number(counter.textContent);
		counter.textContent = currentCount + 1;
	});
}

logoutBtn.addEventListener("click", function () {
	window.location.href = "http://127.0.0.1:5500/ChampionsApp/login.html";
});
