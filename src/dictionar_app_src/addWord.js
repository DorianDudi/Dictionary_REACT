export default function addWord(dictionary_param) {
    let inputField = document.getElementById("addField");
	const userMessage = document.getElementById("userMessage");
	if(inputField.value != "") {
		dictionary_param.push(inputField.value);
		inputField.value = "";
		userMessage.innerHTML = "<h3>Word added to dictionary!</h3>";
		setTimeout(() => {userMessage.innerHTML = "";}, 4000);
	} else {
		userMessage.innerHTML = "<h3>Please type the word you want to add</h3>";
		setTimeout(() => {userMessage.innerHTML = "";}, 4000);
	}
}
