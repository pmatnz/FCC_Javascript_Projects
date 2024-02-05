let plusOne = document.getElementById("one");
let plusTwo = document.getElementById("two");
let plusThree = document.getElementById("three");

let plusOneAway = document.getElementById("away-one");
let plusTwoAway = document.getElementById("away-two");
let plusThreeAway = document.getElementById("away-three");

let homeScore = document.getElementById("btn-text-home");
let awayScore = document.getElementById("btn-text-away");

let resetButton = document.getElementById("reset");

let homescoreboard = 0;
let awayscoreboard = 0;

function addOne() {
	homescoreboard += 1;
	homeScore.textContent = homescoreboard;
}

function addTwo() {
	homescoreboard += 2;
	homeScore.textContent = homescoreboard;
}

function addThree() {
	homescoreboard += 3;
	homeScore.textContent = homescoreboard;
}

function addOneAway() {
	awayscoreboard += 1;
	awayScore.textContent = awayscoreboard;
}

function addTwoAway() {
	awayscoreboard += 2;
	awayScore.textContent = awayscoreboard;
}

function addThreeAway() {
	awayscoreboard += 3;
	awayScore.textContent = awayscoreboard;
}

function resetScore() {
	homeScore.textContent = 0;
	awayScore.textContent = 0;
}

plusOne.addEventListener("click", addOne);
plusTwo.addEventListener("click", addTwo);
plusThree.addEventListener("click", addThree);

plusOneAway.addEventListener("click", addOneAway);
plusTwoAway.addEventListener("click", addTwoAway);
plusThreeAway.addEventListener("click", addThreeAway);

resetButton.addEventListener("click", resetScore);
