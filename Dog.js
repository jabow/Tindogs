// Create the Dog class here

class Dog {
	constructor(data) {
		Object.assign(this, data);
	}

	setHasBeenSwiped(val) {
		this.hasBeenSwiped = val;
	}

	getHasBeenSwiped() {
		return this.hasBeenSwiped;
	}

	setHasBeenLiked(val) {
		this.hasBeenLiked = val;
	}

	getHasBeenLiked() {
		return this.hasBeenLiked;
	}

	getDogHtml() {
		const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
		return `
        <figure class="txtover">
				<img class="avatar" src="${avatar}" alt="A dogs dating profile picture with the name ${name}" />
				<figcaption>
					<h1 id="name-age">${name}, ${age}</h1>
					<h2 id="${bio}">
						Yup, that's my owner. U can meet him if you want
					</h2>
				</figcaption>
			</figure>
			<div id="like-reaction" class="hidden"></div>
			<div id="dislike-reaction" class="hidden"></div>`;
	}
}

export default Dog;
