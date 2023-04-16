export default function searchForWord(words_array) {
	let searchField = document.getElementById("searchField");
	const userMessage = document.getElementById("userMessage");
	if(words_array.includes(searchField.value)) {
		userMessage.innerHTML = "<h3>Word found in Dictionary!</h3>";
		setTimeout(() => {userMessage.innerHTML = "";}, 4000);
	} else {
		userMessage.innerHTML = "<h3>Word not found in Dictionary!</h3>";
		setTimeout(() => {userMessage.innerHTML = "";}, 4000);
	}
	searchField.value = "";
}

