//import logo from './logo.svg';
import './App.css';
import ShowDate from './showDate.js';
import SearchBar from './searchBar.js';
import { Link } from 'react-router-dom'  


function App() {
  return (
    <div className="hero-section">     
      <header className="App-header">
        <ShowDate />
        <h3>Welcome to Quick Weather</h3>
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
