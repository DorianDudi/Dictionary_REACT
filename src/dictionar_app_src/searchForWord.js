export default function searchForWord(wordList) {
	let searchField = document.getElementById("searchField");
	let userMessage = document.getElementById("userMessage");
	if (wordList.includes(searchField.value)) {
		userMessage.innerHTML = "<h3>Word found in Dictionary!</h3>";
		setTimeout(() => {userMessage.innerHTML = "";}, 4000);
	} else {
		userMessage.innerHTML = "<h3>Word not found in Dictionary!</h3>";
		setTimeout(() => {userMessage.innerHTML = "";}, 4000);
	}
	searchField.value = "";
}

