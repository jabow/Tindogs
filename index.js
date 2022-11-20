// Remember to import the data and Dog class!
import dogs from "./data.js";
import Dog from "./Dog.js";

let isWaiting = false;
let isEnd = false;

document
	.getElementById("heart-btn")
	.addEventListener("click", () => vote(true));
document
	.getElementById("cross-btn")
	.addEventListener("click", () => vote(false));

function render() {
	document.getElementById("dog-profile").innerHTML = dog.getDogHtml();
}

function vote(choice) {
	if (!isWaiting && !isEnd) {
		dog.setHasBeenLiked(choice);
		dog.setHasBeenSwiped(true);
		swipe(`${choice ? "like-reaction" : "dislike-reaction"}`);
	}
}

function swipe(id) {
	let direction = id === "like-reaction" ? "swipe-right" : "swipe-left";
	isWaiting = true;
	document.getElementById(id).classList.toggle("hidden");
	document.getElementById("dog-profile").classList.toggle(direction);
	setTimeout(() => {
		document.getElementById(id).classList.toggle("hidden");
		document.getElementById("dog-profile").classList.toggle(direction);
		if (dogs.length > 0) {
			dog = getNextDog();
			render();
		} else {
			noMoreDogs();
		}
		isWaiting = false;
	}, 1000);
}

function getNextDog() {
	const nextDogData = dogs.shift();
	return nextDogData ? new Dog(nextDogData) : {};
}

function noMoreDogs() {
	isEnd = true;
	document.getElementById(
		"dog-profile"
	).innerHTML = `<div class="no-more-dogs"><h1>We are out of dogs to show you, please come back later</h1></div>`;
}

let dog = getNextDog();
render();
