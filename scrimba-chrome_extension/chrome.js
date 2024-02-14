let myLeads = [];
const inputEl = document.getElementById("input-el"); // user input text field
const inputBtn = document.getElementById("input-btn"); // button for user input
const ulEl = document.getElementById("ul-el"); // list button
const deleteBtn = document.getElementById("delete-btn"); // button to clear all local storage and data on screen
const saveBtn = document.getElementById("save-btn");

let leadsFromtStorage = JSON.parse(localStorage.getItem("myLeads")); // transforming myleads into a string using JSON and storing it in local storage in the browser

if (leadsFromtStorage) {
	// checking if leadsfrontstorage has a value in it, NOT null then proceeding with the conditional
	myLeads = leadsFromtStorage;
	render(myLeads); // calling renderleads function
}

saveBtn.addEventListener("click", function () {
	chrome.tabs.query({ active: true, currentwindow: true }, function (tabs) {
		// CALLING CHROME TABS API WOOP

		myLeads.push(tabs[0].url); // push tabs at index 0 object to myLeads
		localStorage.setItem("myleads", JSON.stringify(myLeads)); // turn myleads into a string to save to local storage
		render(myLeads); // call the function to print the URL on the app
	});
});

// this function is injecting list elements into the HTML, the users input gets added as a un ordered list
function render(leads) {
	let listItems = "";
	for (let i = 0; i < leads.length; i++) {
		// put the user input into a link using a tags, when clicked opens link into a new tab or window
		listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'> 
                    ${leads[i]}
                </a>
            </li>
        `;
	}
	ulEl.innerHTML = listItems; // populates list element with the current user input
}

deleteBtn.addEventListener("dblclick", function () {
	localStorage.clear();
	myLeads = []; // this turns myleads INTO A STRING so push method won't work due to it NOT being an array
	render(myLeads);
});

inputBtn.addEventListener("click", function () {
	// event listener for the click button
	myLeads.push(inputEl.value); // pushes whatever the user has entered into the myleads variable
	inputEl.value = ""; // clears the input field after the leads have been pushed to myLeads
	localStorage.setItem("myLeads", JSON.stringify(myLeads)); //pulling the saved data from local storage then transforming it back from a string into an array
	render(myLeads);
});
