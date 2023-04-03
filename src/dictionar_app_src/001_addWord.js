export default function addWord(dictionary_param) {
    let inputField = document.getElementById("addField");
	if(inputField.value != "") {
		dictionary_param.push(inputField.value);
		alert(inputField.value + " has been added to dictionary");
		inputField.value = "";
	} else {
		alert("Please type the word you want to add");
	}
}