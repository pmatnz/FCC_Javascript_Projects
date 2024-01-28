//Access to HTML elements
const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");

//Global variables
let isError = false;

//Functions
function cleanInputString(str) {
	const regex = /[\+\-\s]/g;
	return str.replace(regex, "");
}

function isInvalidInput(str) {
	let regex = /\de\d/i; // e is the exponant symbol, + ensures a match one or more. shorthand uses \
	// let regex = /[0-9]e[0-9]/i; - this is a longer way without using shorthand \d
	return str.match(regex);
}

function addEntry() {
	let targetInputContainer = document.querySelector(
		`#${entryDropdown.value} .input-container`
	);
	// Gets the value of the users input via value property
	let entryNumber =
		targetInputContainer.querySelectorAll('input[type="text"').length + 1; // can select all elements on a type on a page

	let HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name"> Entry ${entryNumber} Name </label> 
	<input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}}
	<label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
	<input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories">`; // value property reresents the text entered by the user

	targetInputContainer.innerHTML += HTMLString; // using innerHTML and += this will add my HTMLString to the current HTML page
}

addEntryButton.addEventListener("click", addEntry);
