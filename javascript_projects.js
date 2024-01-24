let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["Stick"];

//using document.querySelector give access to maniupulate HTML elements
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");

const monsterHealthtext = document.querySelector("#monsterHealth");
//monsterHealth element

const locations = [
	{
		name: "town square",
		"button text": ["Go to store", "Go to cave", "Fight dragon"],
		"button functions": [goStore, goCave, fightDragon],
		text: 'You are in the town square. You see a sign that says "Store" .',
	},
	{
		name: "store",
		"button text": [
			"Buy 10 health (10 gold)",
			"Buy weapon (30 gold)",
			"Go to town square",
		],
		"button functions": [buyHealth, buyWeapon, goTown],
		text: "You enter the Store.",
	},
];

function goTown() {
	update(locations[0]);
}

function goStore() {}

function goCave() {
	// using innerText will change the button to the below
	button2.innerText = "Buy Weapon (30 gold)";
}

function fightDragon() {
	// using innerText will change the button to the below
	button3.innerText = "Go to town square";
}

function update(location) {
	button1.innerText = location["button text"][0];
	button2.innerText = location["button text"][1];
	button3.innerText = location["button text"][2];
	button1.onclick = location["button functions"][0];
	button2.onclick = location["button functions"][1];
	button3.onclick = location["button functions"][2];
	text.innerText = location.text;
}

function buyHealth() {}

function buyWeapon() {}

button1.onclick = goStore; //using the goStore variable on mouse click
button2.onclick = goCave; //using the goCave variable on mouse click
button3.onclick = fightDragon; //using the fightDragon variable on mouse click
