export default function addWord(wordList) {
	let inputField = document.getElementById("addField");
	let userMessage = document.getElementById("userMessage");
	if(inputField.value != "") {
		wordList.push(inputField.value);
		inputField.value = "";
		userMessage.innerHTML = "<h3>Word added to dictionary!</h3>";
		setTimeout(() => {userMessage.innerHTML = "";}, 4000);
	} else {
		userMessage.innerHTML = "<h3>Please type the word you want to add</h3>";
		setTimeout(() => {userMessage.innerHTML = "";}, 4000);
	}
}
