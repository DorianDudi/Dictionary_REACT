import './App.css';
//import ExportComponent from './test_component.js';
import addWord from './dictionar_app_src/addWord.js';
import searchForWord from './dictionar_app_src/searchForWord.js';
const dictionary = [];

export default function App() {
  return (
    <>
    <div>
        <form>
          <input type="text" id="addField" placeholder="Type word to add" />
          <button type="button" id="addTextButton" onClick={() => addWord(dictionary)}>Add to dictionary</button>
        </form>
        <form>
          <input type="text" id="searchField" placeholder="Type word to search for" />
          <button type="button" id="searchButton" onClick={() => searchForWord(dictionary)}>Search dictionary</button>
        </form>
    </div>
    <div id="userMessage"></div>
    </>
  );
}
