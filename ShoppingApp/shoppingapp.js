//***************************************************************DATABASE INFO****************************************************************************************************** */

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"; // importing database firebase
// prettier-ignore
import { getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"; // import ref (reference) and push which will push to database

const appSettings = {
	databaseURL:
		"https://playground-1bf26-default-rtdb.asia-southeast1.firebasedatabase.app/",
}; // this is my database link, adding as a object

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingInDB = ref(database, "Shopping");

//**************************************************************APP INFO************************************************************************************************** */

const textInput = document.getElementById("input-field");
const addButton = document.getElementById("add-button");
const shoppingList = document.getElementById("shopping-list");

//calling onValue to get data from the BD, also using snapshot function
onValue(shoppingInDB, function (snapshot) {
	//let itemsArray = Object.entries(snapshot.val());

	if (snapshot.exists()) {
		// DON"T FORGET THE () FOR THE METHOD!!!!!!!!!!!!
		// using this will run the below code if it's true
		clearShoppingList();
		//console.log(snapshot.val()); // use snapshot which gets the current data . val
		let shoppingArray = Object.entries(snapshot.val()); // converting the snapshot object into an array
		for (let i = 0; i < shoppingArray.length; i++) {
			let currentItem = shoppingArray[i]; // not sure what purpose this serves yet ??????????????
			let currentItemID = currentItem[0]; // not sure what purpose this serves yet ??????????????
			let currentItemValue = currentItem[1]; // not sure what purpose this serves yet ??????????????

			appendItemToList(shoppingArray[i]);
		}
	} else {
		shoppingList.innerHTML = "No items in cart";
	}
});

//*****************EVENT LISTENERS*************************//

addButton.addEventListener("click", function () {
	let inputValue = textInput.value;
	push(shoppingInDB, inputValue); // pushes the user input to DB into ref "Shopping"
	//appendItemToList(inputValue); // apends user input into HTML list REMOVING THIS AS IT WAS DUPLICATING VALUES keeping for later notes
	clearInputTextField();
});

//*****************FUNCTIONS******************//

function clearInputTextField() {
	// Clears the text field after item has been added to list
	textInput.value = "";
}

function appendItemToList(item) {
	// apends user input into HTML list
	//shoppingList.innerHTML += `<li>${inputValue}</li>`; // Adds input to list
	let itemKey = item[0]; // gets the key of shoppingInDB
	let itemValue = item[1]; // gets the value of shoppingInDB

	let appendItem = document.createElement("li"); // creating the list element to be inserted into the HTML
	appendItem.textContent = itemValue; // updates the text content which will be added into the list
	shoppingList.append(appendItem); // appending the value as a list to the HTML

	appendItem.addEventListener("click", function () {
		// function to remove item by double clicking
		let removeItem = ref(database, `Shopping/${itemKey}`); // new Var this links to the exact location to remove the item
		remove(removeItem); // remove firebase function which actions the removeItem variable
	});
}

//IMPORTANT need to clear list if changes are made in DB directly so it will re populate, this will not duplicate data now
function clearShoppingList() {
	shoppingList.innerHTML = "";
}
