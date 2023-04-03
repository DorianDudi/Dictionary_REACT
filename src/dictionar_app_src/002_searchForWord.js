export default function searchForWord(words_array) {
	let searchField = document.getElementById("searchField");
	if(words_array.includes(searchField.value)) {
		alert("Word found in Dictionary!");
	} else {
		alert("Word not found in Dictionary!");
	}
	searchField.value = "";
}