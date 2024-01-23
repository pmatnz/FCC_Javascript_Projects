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

function goTown() {
	button1.innerText = "Buy 10 health (10 gold)";
	button2.innerText = "Buy weapon (30 gold)";
	button3.innerText = "Go to town square";
	text.innerText = "You enter the Store.";
	button1.onclick = buyHealth;
	button2.onclick = buyWeapon;
	button3.onclick = goTown;
}

function goStore() {
	// using innerText will change the button to the below
	button1.innerText = "Buy 10 health (10 gold)";
	button2.innerText = "Buy weapon (30 gold)";
	button3.innerText = "Go to town square";
	text.innerText = "You enter the Store.";
	button1.onclick = buyHealth;
	button2.onclick = buyWeapon;
	button3.onclick = goTown;
}

function goCave() {
	// using innerText will change the button to the below
	button2.innerText = "Buy Weapon (30 gold)";
}

function fightDragon() {
	// using innerText will change the button to the below
	button3.innerText = "Go to town square";
}

function buyHealth() {}

function buyWeapon() {}

button1.onclick = goStore; //using the goStore variable on mouse click
button2.onclick = goCave; //using the goCave variable on mouse click
button3.onclick = fightDragon; //using the fightDragon variable on mouse click
