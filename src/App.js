import './App.css';
//import ExportComponent from './test_component.js';
import addWord from './dictionar_app_src/001_addWord.js';
import searchForWord from './dictionar_app_src/002_searchForWord.js';
const dictionary = [];

export default function App() {
  return (
    <div className="App" id="container">
        <form>
          <input type="text" id="addField" placeholder="Type word to add" />
          <button type="button" id="addTextButton" onClick={() => addWord(dictionary)}>Add to dictionary</button>
        </form>
        <form>
          <input type="text" id="searchField" placeholder="Type word to search for" />
          <button type="button" id="searchButton" onClick={() => searchForWord(dictionary)}>Search dictionary</button>
        </form>
    </div>
  );
}